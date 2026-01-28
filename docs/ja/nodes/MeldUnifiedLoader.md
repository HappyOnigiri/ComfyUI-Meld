# Meld Unified Loader (MeldUnifiedLoader)

Checkpointのロードと、基本的な画像生成パラメータ（プロンプト、解像度、サンプリング設定など）の定義を一つのノードで行う統合ローダーです。

## 概要

通常、ComfyUIのワークフローでは `Load Checkpoint` ノードとは別に、プロンプト入力やサンプリング設定（KSamplerへの入力値）が分散しがちです。
このノードを使用すると、モデルの読み込みと同時に主要な生成パラメータを一箇所で管理できます。
また、設定値を `base_settings` という辞書形式で出力するため、後続のノード（[Meld Settings Unpacker](./MeldSettingsUnpacker.md) など）で同じ設定を簡単に再利用・展開することが可能です。

## 接続イメージ

```
[Meld Unified Loader] +---> MODEL, CLIP, VAE ---> [KSampler / KSampler (Advanced)]
                      +---> positive, negative -> [KSampler / KSampler (Advanced)]
                      +---> base_settings ------> [Meld Settings Unpacker]
```

## 入力 (Inputs)

### Required

| 名前 | 型 | デフォルト | 説明 |
| :--- | :--- | :--- | :--- |
| **model_name** | `COMBO` | - | 使用するCheckpointモデルを選択します。 |
| **positive** | `STRING` | "" | ポジティブプロンプトを入力します（マルチライン対応）。 |
| **negative** | `STRING` | "" | ネガティブプロンプトを入力します（マルチライン対応）。 |
| **seed** | `INT` | 0 | 生成に使用するシード値です。 |
| **steps** | `INT` | 20 | サンプリングのステップ数です。 |
| **cfg** | `FLOAT` | 8.0 | CFGスケール（Classifier Free Guidance）の値です。 |
| **sampler_name** | `COMBO` | - | サンプラーの種類（euler, dpmpp_2mなど）を選択します。 |
| **scheduler** | `COMBO` | - | スケジューラの種類（normal, karras, exponentialなど）を選択します。 |
| **width** | `INT` | 512 | 生成する画像の幅（width）です。 |
| **height** | `INT` | 512 | 生成する画像の高さ（height）です。 |

## 出力 (Outputs)

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| **MODEL** | `MODEL` | ロードされたモデルデータです。 |
| **CLIP** | `CLIP` | ロードされたCLIPモデルです。 |
| **VAE** | `VAE` | ロードされたVAEです。 |
| **positive** | `STRING` | 入力されたポジティブプロンプトをそのまま出力します。 |
| **negative** | `STRING` | 入力されたネガティブプロンプトをそのまま出力します。 |
| **base_settings** | `BASE_SETTINGS` | 入力されたパラメータ（seed, steps, cfg, sampler, scheduler, width, height）をまとめた辞書データです。 |

## 使い方・仕組み

1.  **一元管理**: 生成に必要な基本的な設定をこのノードだけで完結させることができます。
2.  **設定の再利用**: `base_settings` 出力を [Meld Settings Unpacker](./MeldSettingsUnpacker.md) に接続すると、別の場所でパラメータ個別に展開して利用できます。これにより、複雑なワークフローでも設定の同期が容易になります。
3.  **Checkpoint Loaderとの違い**: 通常の `Load Checkpoint` ノードと異なり、VAEやCLIPの個別ロード設定（`load_checkpoint_guess_config` ロジックを使用）を内部で自動的に最適化して行います。

## Image Manager との連携

Meld の Image Manager（画像管理機能）を使用すると、保存済みの画像のメタデータからパラメータを読み込み、設定済みの `Meld Unified Loader` ノードとしてワークフローに追加することができます。

1.  **Image Manager を開く**: 左側のサイドバーから Image Manager を開きます。
2.  **画像メニューを開く**: 対象の画像カードにあるメニューアイコン（︙）をクリックします。
3.  **Add Unified Loader を選択**: メニューから「Add Unified Loader」を選択します。
4.  **ノードの追加**: ワークフロー上に、その画像の生成パラメータ（プロンプト、モデル、シード値など）が入力された状態の `Meld Unified Loader` ノードが追加されます。

これにより、過去の生成設定を素早く再現したり、調整して再生成したりすることが容易になります。
