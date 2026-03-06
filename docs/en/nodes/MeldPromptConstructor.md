# Meld Prompt Constructor (MeldPromptConstructor)

This node recursively searches for text files in a specified directory, extracts lines from each file, and constructs a prompt.
It features dynamic syntax (random selection) and automatic separation of negative prompts.

## Connection

`Meld Prompt Constructor` -> `CLIP Text Encode`

## Inputs

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **directory** | STRING | `./my_prompts` | Path to the directory containing prompt files (.txt). |
| **file_pattern** | STRING | `*.txt` | File pattern to load (glob format). E.g., `*.txt`, `character_*.txt`. |
| **seed** | INT | 0 | Seed value determining random selection or starting position for sequential selection. |
| **selection_method** | COMBO | `random` | Method for selecting lines.<br>- `random`: Randomly selects one line.<br>- `sequential`: Selects sequentially based on the seed. |
| **use_break** | BOOLEAN | `True` | Whether to use the `BREAK` keyword when joining prompts from different files. If `False`, they are joined by commas. |

## Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| **positive_prompt** | STRING | The generated positive prompt. |
| **negative_prompt** | STRING | The automatically extracted negative prompt. |

## Details and Tips

### 1. File Loading and Selection
Loads all files matching `file_pattern` within the specified `directory` (including subdirectories).
Files starting with `_` (underscore) are ignored.
One valid line (excluding empty lines and comments) is selected from each file.

### 2. Comments
The following syntax can be used in files to ignore content:
- `// comment` (until end of line)
- `# comment` (until end of line)
- `/* comment */` (block comment)

### 3. Dynamic Syntax
Use curly braces `{}` for random selection.
- **Simple Selection**: `{A|B|C}` → Selects one of A, B, or C.
- **Weighted Selection**: `{0.1::Rare|0.9::Common}` → Selects based on specified probability (weight::text). Items without weights are treated as 1.0.

### 4. Automatic Negative Prompt Separation
Elements starting with a hyphen `-` in the prompt are automatically moved to the **negative prompt**.
- **Single Element**: `-low quality` → `low quality` is added to the negative prompt and removed from the positive.
- **Group**: `-(worst quality, bad anatomy)` → All elements within the parentheses are moved to the negative prompt.

### 5. Using BREAK
If `use_break` is `True`, ` BREAK ` is inserted between prompts loaded from different files. This prevents the contents of different files from blending together, allowing CLIP to recognize them as independent blocks.
