import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home' // 先ほど作ったHome.tsxをインポート
import './App.css'

function App() {
  return (
    <Routes>
      {/* URLが「/」の時に、Homeコンポーネントを表示するという設定 */}
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App;