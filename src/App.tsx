import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home' // 先ほど作ったHome.tsxをインポート
import './App.css'
import Blog from './pages/Blog'

function App() {
  return (
    <>
      <Routes>
        {/* URLが「/」の時に、Homeコンポーネントを表示するという設定 */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    
        <div>
          <button>
            <a href="/blog">ブログへ</a>
          </button>
        </div>
    </>
  );
}


export default App;