# 部屋画像配置アプリ(サンプル)

部屋画像をマウスのドラッグ&ドロップで自由に移動できるアプリ。

## ディレクトリ構成

- feature
  - 使いまわせないタイプのコンポーネント
  - 例：サイドバーの全体レイアウトを持つコンポーネント
- ui
  - UIとして使いまわせるコンポーネント
  - 例：ボタンコンポーネント、数値表示用コンポーネント

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

## 参考

- https://github.com/nuxt/eslint-config#typescript
- https://eslint.vuejs.org/user-guide/
- https://ja.vuejs.org/
- https://nuxt.com/
