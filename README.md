# 部屋画像配置アプリ(サンプル)

部屋画像をマウスのドラッグ&ドロップで自由に移動できるアプリ。

## 開発用サーバー起動

 `http://localhost:3000`

```bash

pnpm install
pnpm run dev

```

## ビルド

内容的にSSGで問題ないためgenerateで対応。

```bash
pnpm run generate
```

## ディレクトリ構成

- feature
  - 使いまわせないタイプのコンポーネント
  - 例：サイドバーの全体レイアウトを持つコンポーネント
- ui
  - UIとして使いまわせるコンポーネント
  - 例：ボタンコンポーネント、数値表示用コンポーネント



## プロジェクト内のChatGPT使用について

- 基本的に以下のようなプロンプトを使用し、マークアップとスタイリングに使用

```
以下の条件でソースコードを作成してください
・VueのSFC(CompositionAPIを使用)
・<script setup>を使用
・cssはscssを使用
・レイアウトは上部にタイトル、左側に300pxのサイドバー、右側にレスポンシブなエリア
・レイアウトはgrid layoutを使用
```

## 参考

- https://github.com/nuxt/eslint-config#typescript
- https://eslint.vuejs.org/user-guide/
- https://ja.vuejs.org/
- https://nuxt.com/
- https://github.com/twbs/bootstrap/blob/main/dist/css/bootstrap-reboot.css
- https://chat.openai.com/