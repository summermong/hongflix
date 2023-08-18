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

  // 스크롤 시 헤더 배경색 변경
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`p-4 ${
        isScrolled ? 'bg-indigo-950' : 'bg-transparent border-bottom'
      }`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: isScrolled ? 'none' : '1px solid black',
        transition: 'background-color 0.3s ease-in',
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6 items-center">
          <Link
            to="/"
            className={`text-xl font-semibold ${
              isScrolled ? 'text-white' : 'text-indigo-950'
            }`}
          >
            Hongflix
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className={`text-sm ${
                isScrolled ? 'text-white' : 'text-indigo-950'
              }`}
            >
              카테고리
            </button>
            {dropdownVisible && (
              <div
                className={`flex justify-center absolute top-8 right-0 -left-4 py-2 w-20 shadow-lg text-indigo-950 bg-white ${
                  isScrolled ? 'null' : 'border-gray-950'
                }`}
              >
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
          <Link
            to="/search"
            className={`text-sm ${
              isScrolled ? 'text-white' : 'text-indigo-950'
            }`}
          >
            검색
          </Link>
        </div>
        <nav className="space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/mypage"
                className={`text-sm ${
                  isScrolled ? 'text-white' : 'text-indigo-950'
                }`}
              >
                마이 페이지
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`text-sm ${
                  isScrolled ? 'text-white' : 'text-indigo-950'
                }`}
              >
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
