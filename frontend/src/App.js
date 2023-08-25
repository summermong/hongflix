import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./home/Header"; // Header 컴포넌트 import

// 각 페이지에 대한 컴포넌트 import
import Home from "./home/Home";
import Category from "./pages/Category";
import MyPage from "./pages/MyPage";
import Search from "./pages/Search";
import Footer from "./home/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LoginForAdmin from "./pages/LoginForAdmin";
import SignUpForAdmin from "./pages/SignUpForAdmin";
import AdminContents from "./admin/AdminContents";
import AdminHome from "./admin/AdminHome";
import AdminMembers from "./admin/AdminMembers";
import AdminMovies from "./admin/AdminMovies";
import AdminSetting from "./admin/AdminSetting";

function App() {
  const isLoggedIn = false; // 로그인 여부 상태
  const url = `http://localhost:8080/`;
  const inputValue = (e, setValue) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const handleFocus = (value, setValue) => {
    value ? setValue(false) : setValue(true);
  };
  const inputClear = (e, setValue) => {
    e.preventDefault();
    setValue("");
  };
  const isSignUp = async (userInfo, url) => {
    console.log(userInfo);
    console.log("email : ", userInfo["email"]);
    console.log("password : ", userInfo["password"]);
    console.log("nickName : ", userInfo["nickName"]);
    console.log(
      `phoneNumber :  +82${userInfo["phoneNumber"].replaceAll("-", "")}`
    );
    await axios
      .post(url, {
        email: userInfo["email"],
        password: userInfo["password"],
        nickName: userInfo["nickName"],
        phoenNumber: userInfo["phoneNumber"],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const isLogin = async (loginInfo, url) => {
    await axios
      .post(url, { email: loginInfo["email"], password: loginInfo["password"] })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <div className="flex-1">
            <Header isLoggedIn={isLoggedIn} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route path="/search" element={<Search />} />
              <Route path="/mypage" element={<MyPage />} />
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

              <Route path="/admin" element={<AdminHome />}></Route>
              <Route path="/admin/movies" element={<AdminMovies />}></Route>
              <Route path="/admin/members" element={<AdminMembers />}></Route>
              <Route path="/admin/setting" element={<AdminSetting />}></Route>
              <Route
                path="/admin/movies/contents/:movieTitle/:movieId"
                element={<AdminContents />}
              ></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
