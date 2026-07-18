const CACHE_NAME = 'toeic-coach-v1';
// 最低限のインストール・動作条件を満たす空のサービスワーカー
self.addEventListener('install', (event) => {
    self.skipWaiting();
});
self.addEventListener('fetch', (event) => {
    // 常に最新のネットワーク・ローカルストレージデータを優先
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});