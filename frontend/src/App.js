import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './home/Header'; // Header 컴포넌트 import

// 각 페이지에 대한 컴포넌트 import
import Home from './home/Home';
import Category from './pages/Category';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Search from './pages/Search';
import Footer from './home/Footer';

function App() {
  const isLoggedIn = false; // 로그인 여부 상태

  return (
    <div className="App">
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
