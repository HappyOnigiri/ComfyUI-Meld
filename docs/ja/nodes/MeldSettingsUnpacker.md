# Meld Settings Unpacker (MeldSettingsUnpacker)

`BASE_SETTINGS` 形式の辞書データを受け取り、生成に必要な個別のパラメータ（シード値、ステップ数、解像度など）に分解して出力するユーティリティノードです。

`Meld Unified Loader` や `Meld Image Loader` など、画像生成設定をまとめて出力するノードと組み合わせて使用することで、ワークフローを簡潔に保つことができます。

## 入力 (Inputs)

### Required (必須)

| 名前 | 型 | デフォルト | 説明 |
| :--- | :--- | :--- | :--- |
| **base_settings** | `BASE_SETTINGS` | - | 設定値が含まれた辞書データ。通常は `Meld Unified Loader` 等の出力ポートから接続します。 |

## 出力 (Outputs)

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| **seed** | `INT` | 生成に使用するシード値。 |
| **steps** | `INT` | 生成のステップ数。 |
| **cfg** | `FLOAT` | CFG (Classifier Free Guidance) スケール。 |
| **sampler_name** | `STRING` | サンプラーの名前（例: `euler`, `dpmpp_2m`）。 |
| **scheduler** | `STRING` | スケジューラーの名前（例: `normal`, `karras`）。 |
| **width** | `INT` | 画像の幅。 |
| **height** | `INT` | 画像の高さ。 |

## デフォルト動作

入力された `base_settings` が辞書でない場合、または特定のキーが含まれていない場合は、以下のデフォルト値が出力されます。

*   **seed**: 0
*   **steps**: 20
*   **cfg**: 8.0
*   **sampler_name**: "euler"
*   **scheduler**: "normal"
*   **width**: 512
*   **height**: 512
