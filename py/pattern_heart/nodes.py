import random

import numpy as np
import torch
from PIL import Image, ImageDraw, ImageFilter


class MeldPatternHeart:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE",),  # Base image
                "size": ("INT", {"default": 64, "min": 8, "max": 1024, "step": 8}),
                "opacity": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.01}),
                "padding": ("INT", {"default": 0, "min": -512, "max": 1024, "step": 1}),
                "random_rotation": ("BOOLEAN", {"default": False}),
                "placement": (["Inside", "Overlap", "Edge", "Edge Inward"], {"default": "Inside"}),
            },
            "optional": {
                "mask": ("MASK",),    # Editing area (defaults to entire image if not specified)
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "fill_with_pattern"
    CATEGORY = "MeldFlow/Image"

    def fill_with_pattern(self, image, size, opacity, padding, random_rotation, placement, mask=None):
        # Convert to list to support batch processing
        results = []

        # Tiling step (common for the entire batch)
        step = max(1, size + padding)

        # Helper for Tensor -> PIL conversion
        def tensor_to_pil(tensor):
            return Image.fromarray(np.clip(255. * tensor.cpu().numpy(), 0, 255).astype(np.uint8))

        # Helper for PIL -> Tensor conversion
        def pil_to_tensor(pil_img):
            return torch.from_numpy(np.array(pil_img).astype(np.float32) / 255.0).unsqueeze(0)

        # Function to generate default heart pattern
        def create_heart_pattern(size_px=(64, 64), color=(255, 105, 180), opacity_val=1.0):
            # Guard to prevent size_px from being (0, 0)
            w = max(1, int(size_px[0]))
            h = max(1, int(size_px[1]))
            img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
            draw = ImageDraw.Draw(img)
            points = [
                (w/2, h/1.1), (w/10, h/2.5), (w/10, h/6), (w/2.5, h/6),
                (w/2, h/3.5), (w - w/2.5, h/6), (w - w/10, h/6), (w - w/10, h/2.5)
            ]
            alpha = int(255 * opacity_val)
            draw.polygon(points, fill=color + (alpha,))
            return img

        # Process for each image in the batch
        for i in range(image.shape[0]):
            orig_img = tensor_to_pil(image[i]).convert("RGBA")
            width, height = orig_img.size

            # Prepare base heart
            pink_color = (255, 105, 180)

            final_img = orig_img.copy()

            # Prepare mask
            mask_np = None
            is_boundary = None
            mask_center = None
            grad_x = None
            grad_y = None
            if mask is not None:
                mask_idx = i if i < mask.shape[0] else 0
                current_mask = mask[mask_idx]
                mask_pil = Image.fromarray((current_mask.cpu().numpy() * 255).astype(np.uint8), mode="L")
                mask_pil = mask_pil.resize((width, height), Image.Resampling.BILINEAR)
                mask_np = np.array(mask_pil)

                if placement in ["Edge", "Edge Inward"]:
                    dilated = mask_pil.filter(ImageFilter.MaxFilter(3))
                    eroded = mask_pil.filter(ImageFilter.MinFilter(3))
                    is_boundary = np.array(dilated) != np.array(eroded)

                if placement == "Edge Inward":
                    # Calculate centroid (fallback if gradient cannot be taken)
                    y_idx, x_idx = np.where(mask_np > 128)
                    if len(x_idx) > 0:
                        mask_center = (np.mean(x_idx), np.mean(y_idx))

                    # Calculate gradient from slightly blurred mask to get boundary orientation
                    # Adjust blur radius based on size
                    blur_radius = max(1, size // 8)
                    mask_blurred = mask_pil.filter(ImageFilter.GaussianBlur(radius=blur_radius))
                    mask_blurred_np = np.array(mask_blurred).astype(np.float32)
                    grad_y, grad_x = np.gradient(mask_blurred_np)

            # Create list of placement points (x, y, angle)
            draw_points = []

            if placement in ["Edge", "Edge Inward"]:
                if mask_np is not None and is_boundary is not None:
                    # Get mask boundary coordinates
                    y_coords, x_coords = np.where(is_boundary)
                    boundary_pixels = list(zip(x_coords, y_coords))

                    placed_centers: list[tuple[float, float]] = []
                    current_step = max(1, size + padding)
                    for bx, by in boundary_pixels:
                        # Check distance from existing placement points
                        too_close = False
                        for px, py in placed_centers:
                            if np.sqrt((bx - px)**2 + (by - py)**2) < current_step:
                                too_close = True
                                break

                        if not too_close:
                            angle = 0.0
                            if placement == "Edge Inward":
                                # Sample gradient (direction from outside to inside)
                                if grad_y is not None and grad_x is not None:
                                    gy = grad_y[int(by), int(bx)]
                                    gx = grad_x[int(by), int(bx)]

                                    if abs(gx) > 0.01 or abs(gy) > 0.01:
                                        # Point towards gradient direction (inward)
                                        angle = 90 - float(np.degrees(np.arctan2(gy, gx)))
                                    elif mask_center:
                                        # Use centroid if gradient is unstable
                                        dx = mask_center[0] - bx
                                        dy = mask_center[1] - by
                                        angle = 90 - float(np.degrees(np.arctan2(dy, dx)))
                                else:
                                    angle = 0.0

                            draw_points.append((int(bx - size/2), int(by - size/2), angle))
                            placed_centers.append((bx, by))
                else:
                    # Image perimeter if no mask
                    # Top edge
                    for x in range(0, width - size + 1, step):
                        angle = 0.0 if placement == "Edge Inward" else 0.0 # Downward (inward)
                        draw_points.append((x, 0, angle))
                    # Bottom edge
                    for x in range(0, width - size + 1, step):
                        angle = 180.0 if placement == "Edge Inward" else 0.0 # Upward (inward)
                        draw_points.append((x, height - size, angle))
                    # Left edge (excluding corners)
                    for y in range(step, height - size, step):
                        angle = 90.0 if placement == "Edge Inward" else 0.0 # Rightward (inward)
                        draw_points.append((0, y, angle))
                    # Right edge (excluding corners)
                    for y in range(step, height - size, step):
                        angle = -90.0 if placement == "Edge Inward" else 0.0 # Leftward (inward)
                        draw_points.append((width - size, y, angle))
            else:
                # Inside / Overlap use grid
                for y in range(0, height, step):
                    for x in range(0, width, step):
                        if x + size > width or y + size > height:
                            continue

                        tile_mask = mask_np[y:y+size, x:x+size] if mask_np is not None else None
                        if placement == "Overlap":
                            if tile_mask is not None and not np.any(tile_mask > 128):
                                continue
                        else: # Inside
                            if tile_mask is not None and not np.all(tile_mask > 128):
                                continue

                        draw_points.append((x, y, 0.0))

            # Actual drawing process
            # Generate common heart image once for all points
            heart_color = pink_color
            base_heart = create_heart_pattern(size_px=(size, size), color=heart_color, opacity_val=opacity)

            for x, y, base_angle in draw_points:
                angle = base_angle
                if random_rotation:
                    angle += random.uniform(0, 360)

                heart = base_heart
                if angle != 0:
                    heart = base_heart.rotate(angle, resample=Image.Resampling.BICUBIC, center=(size/2, size/2))

                # Paste heart
                final_img.paste(heart, (x, y), heart)

            results.append(pil_to_tensor(final_img.convert("RGB")))

        return (torch.cat(results, dim=0),)
