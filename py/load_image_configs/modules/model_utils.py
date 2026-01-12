import comfy.sd
import folder_paths

from .utils import Utils


class ModelUtils:
    @staticmethod
    def find_best_match_model(
        model_name_query: str | None, model_type: str = "checkpoints"
    ) -> tuple[str | None, float, str]:
        if not model_name_query:
            return None, 0.0, "No model name in metadata."

        available_models = folder_paths.get_filename_list(model_type)
        if not available_models:
            return None, 0.0, f"No models available in {model_type}."

        def clean_path(n: str) -> str:
            n = n.lower().replace("\\", "/")
            for ext in [".safetensors", ".ckpt", ".pt", ".bin", ".diffusers", ".engine"]:
                if n.endswith(ext):
                    return n[: -len(ext)]
            return n

        q_clean = clean_path(model_name_query)
        q_basename = q_clean.split("/")[-1]

        for m in available_models:
            if m == model_name_query:
                return m, 1.0, "Exact match found."

            m_clean = clean_path(m)
            m_basename = m_clean.split("/")[-1]
            if m_clean == q_clean or m_basename == q_clean or m_basename == q_basename:
                return m, 1.0, "Exact match (ignoring extension/case)."

        best_score = 0.0
        best_match = None

        for m in available_models:
            score = Utils.calculate_similarity(model_name_query, m)
            if score > best_score:
                best_score = score
                best_match = m

        if best_match:
            return best_match, best_score, f"Best match found: '{best_match}' (Score: {best_score:.2f})"

        return None, 0.0, "No models available to match."

    @staticmethod
    def find_and_load_checkpoint(model_name_query: str | None) -> tuple[object, object, object, str, str]:
        logs = []
        logs.append(f"\n=== Load Checkpoint: '{model_name_query}' ===")

        target_ckpt, score, match_log = ModelUtils.find_best_match_model(model_name_query, "checkpoints")

        if target_ckpt and score < 1.0:
            logs.append(f"!! FUZZY MATCH USED: {match_log}")
        else:
            logs.append(match_log)

        if not target_ckpt:
            ckpt_files = folder_paths.get_filename_list("checkpoints")
            if ckpt_files:
                target_ckpt = ckpt_files[0]
                logs.append(f"-> Fallback used: {target_ckpt}")
            else:
                raise ValueError("No checkpoints found.")

        ckpt_path = folder_paths.get_full_path("checkpoints", target_ckpt)
        out = comfy.sd.load_checkpoint_guess_config(
            ckpt_path,
            output_vae=True,
            output_clip=True,
            embedding_directory=folder_paths.get_folder_paths("embeddings"),
        )
        return out[0], out[1], out[2], target_ckpt, "\n".join(logs)
