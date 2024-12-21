let title, desctiption, shortcutIcon, appleTouchIcon, icon, siteName, url, ogUmage, date, tag, tagName, pubYear, author, whatBeforeHTML;
//サイト名、サイトの著者名、サイトの発行年、各種ファビコン（shortcut icon, apple-touch-icon, icon）へのパスを以下の""内に入力。
siteName = "";
author = "";
pubYear = "";
shortcutIcon = "";
appleTouchIcon = "";
icon = "";
/* 記事タイトル、記事の説明、記事の発行日、記事へのURL、記事のファイル名（.htmlを除く）、
記事に付けるタグ（"sample"など）、タグ名（"サンプル"など）、サムネイル画像、サムネイル下部タイトル（短め推奨）
（必要であれば）OGPに設定する画像へのパスを入力 */
title = "";
description = "";
date = "";
url = "";
whatBeforeHTML = "";
tag = "";
tagName = "";
thumbnail = "";
thumbnailTitle = "";
ogImage = "";

console.log(`
  <!DOCTYPE html>
  <html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width", initial-scale=1, user-scalable="yes">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="stylesheet" href="../../normalize.css">
    <link rel="stylesheet" href="stylesheet.css">
    <link rel="shortcut icon" href="${shortcutIcon}">
    <link rel="apple-touch-icon" href="${appleTouchIcon}">
    <link rel="icon" type="image/png" href="${icon}">
    <meta property="og:site_name" content="${siteName}">
    <meta property="og:title" content="${title}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${url}">
    <meta property="og:description" content="${description}">
    <meta name="twitter:card" content="summary" />
    <meta property="og:image" content="${ogImage}">
  </head>
  <body>
    <header>
      <a href="../../index.html" title="ホーム"><p class="name">${siteName}</p></a>
      <p class="tab">
        <a href="../../index.html" class="rest" title="note">note</a><a href="../index.html" title="work"><span>work</span></a>
      </p>
    </header>
    <main>
      <article>
      <h1>${title}</h1>
      <p class="tag">${date}</p>

              ここに本文を入力

        <p class="tag"><a href="../index.html?selectedButton=${tag}">&#035;${tagName}</a></p>
      </article>
      <div class="end">
        <p><a class="home" href="../index.html">│ home</a></p>
      </div>
    </main>
    <footer>
      <div class="copyright">
        <small>&copy; ${pubYear} ${author}</small>
      </div>
    </footer>
  </body>
  </html>

  <li class="item ${tag}">
    <a href="articles/${whatBeforeHTML}.html" title="${description}">
      <img src="images/${thumbnail}">
      <p>#${thumbnailTitle}</p>
    </a>
  </li>

  <item>
    <title>${title}</title>
    <link>${url}</link>
    <description>${description}</description>
    <pubDate>${date}</pubDate>
  </item>
`);
