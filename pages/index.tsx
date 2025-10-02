//TO-DO/
//└── profile/
//├── pages/                # Next.js のルーティング基準
//│   ├── index.tsx         # ホームページ ("/" に対応)
//│   ├── blog.tsx          # ブログページ ("/blog" に対応)
//├── public/               # 静的ファイル (画像など)
//├── styles/               # CSS ファイル
//│   ├── globals.css       # グローバル CSS
//├── package.json          # プロジェクト設定
//├── tsconfig.json         # TypeScript 設定
//├── node_modules/         # 依存関係
//└── ...


import React from 'react';

function App() {
    return (
      <>
        <h1>My portfolio</h1>
        <p># 自己紹介</p>
        <a href="/bolg">ブログ</a>
          <div>
            <button>
              <a href="/Blog">ブログへ</a>
            </button>
          </div>
      </>
    );
  }
  
  
  export default App;