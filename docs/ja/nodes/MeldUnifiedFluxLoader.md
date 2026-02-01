# Meld Unified Flux Loader (MeldUnifiedFluxLoader)

Flux.1 (Dev/Schnell) 向けに、モデルの読み込みと生成パラメータを一つのノードでまとめて設定できる統合ローダーです。
Flux 特有の Guidance を入力に持ち、CFG は内部で固定値として扱います。

**接続イメージ:**
`Meld Unified Flux Loader` -> `Flux ワークフロー (UNet/CLIP/VAE)`

## 入力 (Inputs)

### Required (必須)

| 名前 | 型 | デフォルト | 説明 |
| :--- | :--- | :--- | :--- |
| **model_name** | `COMBO` | - | 使用する UNet モデルを選択します（`models/unet`）。 |
| **weight_dtype** | `COMBO` | - | UNet の読み込み精度を選択します（default / fp8 など）。 |
| **clip_name1** | `COMBO` | - | 1つ目のCLIPモデル（例: t5xxl系）。 |
| **clip_name2** | `COMBO` | - | 2つ目のCLIPモデル（例: clip_l）。 |
| **clip_type** | `COMBO` | - | CLIPタイプ（Flux 用は `flux`）。 |
| **clip_device** | `COMBO` | - | CLIPの読み込みデバイス設定。 |
| **vae_name** | `COMBO` | - | 使用する VAE モデルを選択します。 |
| **positive** | `STRING` | "" | ポジティブプロンプトを入力します（マルチライン対応）。 |
| **seed** | `INT` | 0 | 生成に使用するシード値です。 |
| **steps** | `INT` | 20 | サンプリングのステップ数です。 |
| **guidance** | `FLOAT` | 3.5 | Flux Guidance Scale (Distilled CFG) の値です。 |
| **sampler_name** | `COMBO` | - | サンプラーの種類（euler, dpmpp_2mなど）を選択します。 |
| **scheduler** | `COMBO` | - | スケジューラの種類（normal, karras, exponentialなど）を選択します。 |
| **width** | `INT` | 1024 | 生成する画像の幅（width）です。 |
| **height** | `INT` | 1024 | 生成する画像の高さ（height）です。 |

## 出力 (Outputs)

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| **MODEL** | `MODEL` | ロードされたモデルデータです。 |
| **CLIP** | `CLIP` | ロードされたCLIPモデルです。 |
| **VAE** | `VAE` | ロードされたVAEです。 |
| **positive** | `STRING` | 入力されたポジティブプロンプトをそのまま出力します。 |
| **base_settings** | `BASE_SETTINGS` | seed/steps/guidance/sampler/scheduler/width/height などをまとめた辞書データです（CFGは 1.0、negative は空文字で固定）。 |

## Tips & Mechanism

- **解像度の丸め**:
  width/height は内部で 16 の倍数に切り捨てられます。Flux のパディングエラー回避のためです。

- **CFG と Negative**:
  CFG は内部で 1.0 固定、Negative は空文字列が設定されます（Flux 向けの仕様に合わせた扱い）。

- **設定の再利用**:
  `base_settings` を [Meld Settings Unpacker](./MeldSettingsUnpacker.md) に接続すると、各パラメータを個別に取り出せます。
