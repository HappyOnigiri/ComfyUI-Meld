# ComfyUI-Meld

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![ComfyUI](https://img.shields.io/badge/ComfyUI-Registry-green)](https://registry.comfy.org/)

[English README](README.md)

**生成画像を“強力なアセットデータベース”へ。**

`ComfyUI-Meld` は、混沌としがちなワークフローを整理し、生成結果を「再利用できる資産」として蓄積するためのノードパックです。プロンプト、設定、系統情報（Lineage）を自動で記録し、すべての生成履歴を保持します。

Meld Image Manager により、ComfyUI 内で検索・タグ付け・系統追跡を一体化。ベストな結果を見つけ、その“由来”を確認し、そのまま即座に次のイテレーションへつなげます。

---

## Image Manager（Meld Image Manager）

Image Manager は、ComfyUI のサイドバーに追加される統合画像管理システムです。生成画像の閲覧・検索・整理を高速化し、過去の作品をワークフローに再利用する流れをスムーズにします。

- **ギャラリー**: 生成画像を高速に一覧・整理
- **詳細ビューアー**: プロンプト、モデル、生成設定、ノート、タグの確認・編集
- **高度な検索**: プロンプト/タグ/日付/モデル名などで柔軟に絞り込み
- **系統管理（Lineage）**: img2img 等の親子関係を可視化
- **ワークフロー連携**: 画像をワンクリックで読み込み、設定やワークフローの復元を補助

基本は、ワークフロー実行完了時に **Output 画像が自動登録** されます。さらに `Meld Save Image` を使うと、タグの自動付与や親画像（Source）の明示指定など、管理を強化できます。

詳細な使い方とショートカット、検索構文は [`docs/ja/ImageManager.md`](./docs/ja/ImageManager.md) を参照してください。

---

## 収録ノード（全9種）

各ノードの詳細は `docs/ja/nodes/` を参照してください。

| ノード | 役割（概要） | ドキュメント |
| :--- | :--- | :--- |
| **Meld Prompt Constructor** | テキストファイル群から動的構文を使ってプロンプトを構築し、ネガティブを自動分離 | [`docs/ja/nodes/MeldPromptConstructor.md`](./docs/ja/nodes/MeldPromptConstructor.md) |
| **Meld Auto Exposure** | 輝度を解析し、目標明るさへ近づけるガンマ補正を自動適用 | [`docs/ja/nodes/MeldAutoExposure.md`](./docs/ja/nodes/MeldAutoExposure.md) |
| **Meld Save Image** | 画像保存＋Image Manager へ自動登録（メタデータ保存、pHash による Lineage 構築、タグ付け） | [`docs/ja/nodes/MeldSaveImage.md`](./docs/ja/nodes/MeldSaveImage.md) |
| **Meld Unified Loader** | Checkpoint ロードと基本生成パラメータ定義を統合し、`base_settings` として再利用可能に出力 | [`docs/ja/nodes/MeldUnifiedLoader.md`](./docs/ja/nodes/MeldUnifiedLoader.md) |
| **Meld Settings Unpacker** | `BASE_SETTINGS` 辞書を seed/steps/cfg/解像度等の個別パラメータへ分解して出力 | [`docs/ja/nodes/MeldSettingsUnpacker.md`](./docs/ja/nodes/MeldSettingsUnpacker.md) |
| **Meld Image Loader** | 画像を読み込み、埋め込みメタデータからプロンプト/設定を抽出し、モデルロードも試行 | [`docs/ja/nodes/MeldImageLoader.md`](./docs/ja/nodes/MeldImageLoader.md) |
| **Meld Image Loader Batch** | ディレクトリ内の画像を index 指定で連続読み込み（メタデータ解析・復元も実施） | [`docs/ja/nodes/MeldImageLoaderBatch.md`](./docs/ja/nodes/MeldImageLoaderBatch.md) |
| **Meld Pixelate（Instant Pixelate）** | ダウンサンプル→最近傍アップスケールでピクセル化（モザイク/ドット絵） | [`docs/ja/nodes/MeldPixelate.md`](./docs/ja/nodes/MeldPixelate.md) |
| **Meld Pattern Heart（Infinite Heart Generator）** | ハートパターンをグリッド/エッジ沿い等で自動配置して装飾 | [`docs/ja/nodes/MeldPatternHeart.md`](./docs/ja/nodes/MeldPatternHeart.md) |

---

## インストール方法

### 推奨：ComfyUI Manager または Registry
ComfyUI Managerの検索画面から **「Meld」** と入力し、インストールしてください。
または、CLI（コマンドライン）より以下のコマンドを実行します。

```bash
comfy node install NodeMeld/ComfyUI-Meld

```

### 手動インストール

`custom_nodes` ディレクトリで以下のコマンドを実行し、ComfyUIを再起動してください。

```bash
git clone https://github.com/HappyOnigiri/ComfyUI-Meld.git
cd ComfyUI-Meld
pip install -r requirements.txt

```

---

## 仕様と要件

* **対応OS**: Windows / Linux / macOS
* **Python**: 3.10以上推奨
* **ライセンス**: Apache License 2.0 (商用利用可、改変可)

---

## プライバシー

画像メタデータから **生成に関する情報（プロンプト/ワークフロー等）のみ** を抽出し、GPS 等のプライベートな EXIF データは読み込みません。また、ファイル読み込みは **指定したディレクトリとそのサブディレクトリ** のみに限定します（適切なアクセス権限管理を推奨します）。

---

## サポート・フィードバック

不具合の報告や新機能の要望、使い方が分からない場合の質問など、あらゆるフィードバックを歓迎しています！
開発者への連絡やフィードバックは、GitHub Issues から気軽に送ってください。

* **不具合報告 (Bug Report)**: エラーログやスクリーンショットを添付していただけると、修正がスムーズになります。
* **機能要望 (Feature Request)**: 「こんな機能が欲しい」「ここが使いにくい」といったアイデアをお待ちしています。

> **Notice:** 開発者は日本人ですので、Issue は日本語で気軽にどうぞ。

[GitHub Issues を開く](https://github.com/HappyOnigiri/ComfyUI-Meld/issues)

---

## 貢献について (Contribution)

**Pull Request (PR) は、ドキュメントの誤字修正から新機能の実装まで、どんな小さなものでも大歓迎です！**

完璧なコードである必要はありません。「とりあえず動く」状態でも問題ありません。

---

**開発元**: [HappyOnigiri](https://github.com/HappyOnigiri)

---
