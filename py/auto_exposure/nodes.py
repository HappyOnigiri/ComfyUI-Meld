import torch


class MeldAutoExposure:
    @classmethod
    def INPUT_TYPES(cls) -> dict:
        return {
            "required": {
                "image": ("IMAGE",),
                # Changed to FLOAT. Finer step allows for subtle adjustments.
                # Large max value allows for extreme corrections.
                "correction_strength": ("FLOAT", {"default": 0.5, "min": 0.0, "max": 5.0, "step": 0.05}),
                "target_brightness": ("FLOAT", {"default": 0.5, "min": 0.1, "max": 0.9, "step": 0.05}),
            },
            "optional": {
                # Advanced options: Limiter to prevent extreme values.
                "gamma_limit_min": ("FLOAT", {"default": 0.2, "min": 0.01, "max": 1.0, "step": 0.01}),
                "gamma_limit_max": ("FLOAT", {"default": 2.5, "min": 1.0, "max": 5.0, "step": 0.01}),
            },
        }

    # Output calculated gamma and current brightness in addition to the image.
    RETURN_TYPES = ("IMAGE", "FLOAT", "FLOAT")
    RETURN_NAMES = ("image", "calculated_gamma", "current_brightness")
    FUNCTION = "adjust_gamma"
    CATEGORY = "Meld/Image"

    def adjust_gamma(
        self,
        image: torch.Tensor,
        correction_strength: float,
        target_brightness: float,
        gamma_limit_min: float = 0.2,
        gamma_limit_max: float = 2.5,
    ) -> tuple[torch.Tensor, float, float]:
        # Previous factor conversions (e.g., 0.005) are no longer needed;
        # values are now intuitive (1.0 = 100%).

        out_images = []
        out_gammas = []
        out_current_l = []

        for i in range(image.shape[0]):
            img = image[i]

            # 1. Calculate Average Luminance (Rec.601)
            # Use torch.mean directly.
            r_mean = torch.mean(img[:, :, 0])
            g_mean = torch.mean(img[:, :, 1])
            b_mean = torch.mean(img[:, :, 2])

            l_current = 0.299 * r_mean + 0.587 * g_mean + 0.114 * b_mean

            # Store for recording.
            out_current_l.append(float(l_current))

            # 2. Calculate Gamma Value
            # Generalize variable names while maintaining the algorithm.
            # Logic: 1.0 + Strength * (Target - Current)
            # Low brightness (Target > Current) -> Gamma > 1.0 -> Corrected to be brighter (1/Gamma < 1).
            # Note: The original logic was gamma = (1.0 + S*T) - L*S, but
            # gamma = 1.0 + correction_strength * (target_brightness - l_current)
            # might be more intuitive. (Results are identical.)

            gamma_val = 1.0 + correction_strength * (target_brightness - float(l_current))

            # Safety: Clamp gamma value to user-defined limits.
            # Prevents breakdown while allowing extreme settings.
            gamma = max(gamma_limit_min, min(gamma_limit_max, float(gamma_val)))

            out_gammas.append(gamma)

            # 3. Apply Gamma Correction
            gamma_inv = 1.0 / gamma

            # Clamp output to ensure numerical stability (range 0.0-1.0).
            corrected_img = torch.pow(img, gamma_inv)
            corrected_img = torch.clamp(corrected_img, 0.0, 1.0)

            out_images.append(corrected_img)

        # For batch processing, it's common to return the average or the first item.
        # Here, we return the average of the entire batch for simplicity.
        avg_gamma = sum(out_gammas) / len(out_gammas)
        avg_l = sum(out_current_l) / len(out_current_l)

        return (torch.stack(out_images), avg_gamma, avg_l)
