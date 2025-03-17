---
home: true
title: ホーム
description: kenryuSのホームページ
tagline: kenryuSが作る本当に「最後」の個人ウェブサイト。
actions:
    - text: ブログ
      link: /blog/
      type: primary
    - text: プロジェクト
      link: /projects/
      type: primary
footer: <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://kenryus.github.io/blog-vp">kenryuS</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://kenryus.github.io/blog-vp/about-author">kenryuS</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a></p>
footerHtml: true
---

<span id="top-page-comment">ただの(?)帰国子女プログラマー。</span>

## 最新の投稿

<LatestPosts :take="3" />

<script setup>
import LatestPosts from "../../components/latestPosts.vue";
</script>

<style>
#top-page-comment {
    font-size: x-large;
}
</style>
