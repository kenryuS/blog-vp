---
title: プロジェクト
description: kenryuSがやっているプロジェクト達
layout: DefaultLayout
---

# プロジェクト

現在開発中・配信中のプロジェクトです。

[[toc]]

## ::mingcute:braces-line /lightgreen vertical-align=middle:: 開発中

### 八五式電子観測儀

現在開発中のクロスプラットフォーム艦これ補助専用ブラウザ。
[七四式](https://github.com/dais-k/ElectronicObserver)がWindows専用でWine上で動作させるのが難しいためQt6で新たに開発しています。

## ::mingcute:save-2-line /lightblue vertical-align=middle:: プロジェクト保存・保守

### Docker Guacamole RE(Revival)

ブラウザ上でSSHやVNCに接続できるApache GuacamoleをDockerに落とし込んだプロジェクト。
2021年2月にアーカイブされた[oznu/docker-guacamole](https://github.com/oznu/docker-guacamole)をフォークし、最新のソフトウェアやパッチを当てた物になります。

リンク：
* [ソースコード](https://github.com/kenryuS/docker-guacamole-re)
* [Docker Hub](https://hub.docker.com/r/kenryus/docker-guacamole)

## ::mingcute:alert-fill /yellow vertical-align=middle:: 開発停滞中

### pass_gen

クロスプラットフォームな簡易パスワード生成ソフト。
元は9年生のAP Computer Science Principalの最終課程審査試験で満点の5を取ったプロジェクト。
コマンドラインやGUI(GTK使用)から使える。
現在はNcursesを使ったTUIを作っている途中。

リンク:
* [ソースコード](https://github.com/kenryuS/pass_gen)

### 東方 弾幕逆開発

東方キャラが放つ弾幕を再現しようとするプロジェクト。
使用ゲームエンジンは[raylib](https://github.com/raysan5/raylib)。
謎にC言語縛りしているので開発が停滞している。

リンク：
* [ソースコード](https://github.com/kenryuS/Touhou-DanmakuReverseEng)

## ::mingcute:alert-octagon-fill /red vertical-align=middle:: 開発・保守停止

### Ghost Shooter(Alpha,Beta)

8年生の技術の授業で作成したJavaScript(Construct 3)ゲームをUnityに移植・拡張した物。

アルファ版バイナリ(Linuxのみ対応): [ダウンロード](https://github.com/kenryuS/Ghost_Shooter_Alpha/tree/alpha_builds)

[ベータ版](https://github.com/kenryuS/Ghost_Shooter_beta/tree/main)で用いたUnityバージョン: `2021.3.25f1`

### 一代目ブログ

Next.js で作成されたファイルベースのブログ。
極めて単純だが、微妙なページナビゲーションや変更・拡張に弱いため放棄。

リンク：
* [レポジトリ(アーカイブ済)](https://github.com/kenryuS/website-old)
* [オフライン版(ZIM形式)](https://git.kenryu.us/kenryuS/my-web-archive/raw/branch/main/kenryuS-blog-1st-gen_2025-03.zim)

### 二代目ブログ

Nuxt で作成されたPostgressql使用のブログ。
タグ検索機能やオンデマンドでサイトから記事を直接管理できるUIを持っていた。
ページの動作がもっさりしており、レスポンシブデザインもよろしくなかった。

リンク：
* [レポジトリ](https://github.com/kenryuS/blog)
