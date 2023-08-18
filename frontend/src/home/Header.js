import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // 로그인 여부 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 드롭다운
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <header className="bg-indigo-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6 items-center">
          <Link to="/" className="text-white text-xl font-semibold">
            Hongflix
          </Link>
          <div className="relative">
            <button onClick={toggleDropdown} className="text-white text-sm">
              카테고리
            </button>
            {dropdownVisible && (
              <div className="flex justify-center absolute top-8 right-0 -left-4 bg-gray-50 py-2 w-20 shadow-lg">
                <ul className="text-sm text-center justify-center px-2">
                  <li className="py-0.5 px-1">
                    <Link to="/romance" onClick={closeDropdown}>
                      로맨스
                    </Link>
                  </li>
                  <li className="py-0.5 px-1">
                    <Link to="/horror" onClick={closeDropdown}>
                      호러
                    </Link>
                  </li>
                  <li className="py-0.5 px-1">
                    <Link to="/action" onClick={closeDropdown}>
                      액션
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to="/search" className="text-white text-sm">
            검색
          </Link>
        </div>
        <nav className="space-x-4">
          {isLoggedIn ? (
            <>
              <Link to="/mypage" className="text-white text-sm">
                마이 페이지
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white text-sm">
                로그인
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
