import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './home/Header'; // Header 컴포넌트 import

// 각 페이지에 대한 컴포넌트 import
import Home from './home/Home';
import RomancePage from './pages/RomancePage';
import ActionPage from './pages/ActionPage';
import HorrorPage from './pages/HorrorPage';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Search from './pages/Search';

function App() {
  const isLoggedIn = false; // 로그인 여부 상태

  return (
    <div className="App">
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/romance" element={<RomancePage />} />
          <Route path="/action" element={<ActionPage />} />
          <Route path="/horror" element={<HorrorPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
