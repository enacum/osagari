<?php
header("Content-Type: application/rss+xml; charset=UTF-8");

echo '<?xml version="1.0" encoding="UTF-8"?>';
echo '<rss version="2.0">';
echo '<channel>';
// 以下、サイト名　サイトURL　サイト説明を追加
echo '<title>サイト名</title>';
echo '<link>サイトURL</link>';
echo '<description>サイト説明</description>';
echo '<language>ja</language>';

// 新しい記事は上に追加
$articles = [
    [
        // 以下に記事の情報を記入する
        'title' => '記事タイトル',
        'link' => '記事URL',
        'description' => '記事説明',
        'category' => 'カテゴリ',
        'pubDate' => 'yyyy-mm-dd hh:mm:ss'
    ], // 記事と記事の間はコンマ（,）で区切る
    [
        'title' => '記事タイトル',
        'link' => '記事URL',
        'description' => '記事説明',
        'category' => 'カテゴリ',
        'pubDate' => 'yyyy-mm-dd hh:mm:ss'
    ]
];

foreach ($articles as $article) {
    echo '<item>';
    echo '<title>' . htmlspecialchars($article['title']) . '</title>';
    echo '<link>' . htmlspecialchars($article['link']) . '</link>';
    echo '<description>' . htmlspecialchars($article['description']) . '</description>';
    echo '<category>' . htmlspecialchars($article['category']) . '</category>';
    echo '<pubDate>' . date('r', strtotime($article['pubDate'])) . '</pubDate>';
    echo '</item>';
}

echo '</channel>';
echo '</rss>';
?>
