/** @format */

import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import axios from 'axios';
import Header from './home/Header';

// Header 컴포넌트 import

// 각 페이지에 대한 컴포넌트 import
import Home from './home/Home';
import Category from './pages/Category';
import MyPage from './pages/MyPage';
import Search from './pages/Search';
import Footer from './home/Footer';
import Login from './pages/Login';
import List from './pages/List';
import SignUp from './pages/SignUp';
import LoginForAdmin from './pages/LoginForAdmin';
import SignUpForAdmin from './pages/SignUpForAdmin';
import AdminContents from './admin/AdminContents';
import AdminHome from './admin/AdminHome';
import AdminMembers from './admin/AdminMembers';
import AdminMovies from './admin/AdminMovies';
import AdminSetting from './admin/AdminSetting';

function App() {
  const url = `https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/`;
  const navigator = useNavigate();
  const location = useLocation();

  const [isLogined, setIsLogined] = useState(false);
  const [isUserRoll, setIsUserRoll] = useState('');
  const [userInfo, setUserInfo] = useState({});

  const fetchLogined = async () => {
    await axios
      .get(`${url}api/home`, { withCredentials: true })
      .then((res) => {
        console.log(res.data.loginUserResponse);
        setIsLogined(res.data.login);
        setUserInfo(res.data.loginUserResponse);
        res.data.loginUserResponse === null
          ? setIsUserRoll('')
          : setIsUserRoll(res.data.loginUserResponse.roll);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isLogout = async (e, navUrl) => {
    e.preventDefault();
    await axios
      .post(`${url}members/logout`)
      .then((res) => {
        console.log(res.data);
        fetchLogined();
        navigator(navUrl);
        alert(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ShowHeaderAndFooter = !(
    isUserRoll === 'admin' ||
    location.pathname === '/admin' ||
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/admin/login' ||
    location.pathname === 'admin/signup'
  );
  console.log('헤더푸터 보여주기 : ', ShowHeaderAndFooter);
  console.log('로그인 여부 : ', isLogined);
  console.log('유저 정보', userInfo);
  console.log('유저 롤 : ', isUserRoll);

  const inputValue = (e, setValue) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const handleFocus = (value, setValue) => {
    value ? setValue(false) : setValue(true);
  };
  const inputClear = (e, setValue) => {
    e.preventDefault();
    setValue('');
  };
  const isSignUp = async (userInfo, url, navUrl) => {
    console.log(userInfo);
    console.log('email : ', userInfo['email']);
    console.log('password : ', userInfo['password']);
    console.log('nickName : ', userInfo['nickName']);
    console.log('phoneNumber', userInfo['phoneNumber'].replaceAll('-', ''));
    await axios
      .post(
        url,
        {
          email: userInfo['email'],
          password: userInfo['password'],
          nickName: userInfo['nickName'],
          phoneNumber: userInfo['phoneNumber'].replaceAll('-', ''),
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        alert(res.data.data);
        if (res.data.status === 200) {
          navigator(navUrl);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const isLogin = async (loginInfo, url, navUrl) => {
    await axios
      .post(url, { email: loginInfo['email'], password: loginInfo['password'] })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200 && navUrl === '/') {
          if (res.data.data.roll === 'user') {
            setIsLogined(true);
            setUserInfo(res.data.data);
            setIsUserRoll(res.data.data.roll);
            alert('로그인이 성공했습니다');
            navigator(navUrl);
          }
          if (res.data.data.roll === 'admin') {
            alert('유저 로그인에 실패했습니다');
          }
        }
        if (res.data.status === 200 && navUrl === '/admin') {
          if (res.data.data.roll === 'admin') {
            setIsLogined(true);
            setUserInfo(res.data.data);
            setIsUserRoll(res.data.data.roll);
            alert('로그인이 성공했습니다');
            navigator(navUrl);
          }
          if (res.data.data.roll === 'user') {
            alert('관리자 로그인에 실패했습니다');
          }
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  useEffect(() => {
    fetchLogined();
  }, []);

  axios.defaults.withCredentials = true;

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
        {ShowHeaderAndFooter ? (
          <Header isLoggedIn={isLogined} isLogout={isLogout} />
        ) : null}
        <Routes>
          <Route
            path="/"
            element={<Home userInfo={userInfo} isLogined={isLogined} />}
          />
          <Route path="/category" element={<Category />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/mypage"
            element={<MyPage userInfo={userInfo} fetchLogined={fetchLogined} />}
          />
          <Route
            path="/list/:modalId"
            element={<List userInfo={userInfo} isLogined={isLogined} />}
          />

          <Route
            path="/login"
            element={
              <Login
                inputValue={inputValue}
                handleFocus={handleFocus}
                inputClear={inputClear}
                isLogin={isLogin}
                url={url}
              />
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <SignUp
                inputValue={inputValue}
                handleFocus={handleFocus}
                inputClear={inputClear}
                isSignUp={isSignUp}
                url={url}
              />
            }
          ></Route>
          <Route
            path="/admin/login"
            element={
              <LoginForAdmin
                inputValue={inputValue}
                handleFocus={handleFocus}
                inputClear={inputClear}
                isLogin={isLogin}
                url={url}
              />
            }
          ></Route>
          <Route
            path="/admin/signup"
            element={
              <SignUpForAdmin
                inputValue={inputValue}
                handleFocus={handleFocus}
                inputClear={inputClear}
                isSignUp={isSignUp}
                url={url}
              />
            }
          ></Route>
          <Route
            path="/admin"
            element={
              isLogined && isUserRoll === 'admin' ? (
                <AdminHome />
              ) : (
                <Navigate to="/admin/login" />
              )
            }
          ></Route>
          <Route
            path="/admin/movies"
            element={<AdminMovies inputValue={inputValue} />}
          ></Route>
          <Route path="/admin/members" element={<AdminMembers />}></Route>
          <Route path="/admin/setting" element={<AdminSetting />}></Route>
          <Route
            path="/admin/movies/contents/:movieTitle/:movieId"
            element={<AdminContents />}
          ></Route>
        </Routes>
      </div>
      {ShowHeaderAndFooter ? <Footer /> : null}
    </div>
  );
}

export default App;
