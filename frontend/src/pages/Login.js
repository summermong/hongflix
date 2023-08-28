/** @format */

import React, { useEffect, useState } from 'react';
import styles from './Auth.module.css';
import { Link } from 'react-router-dom';

export default function Login({
  inputValue,
  handleFocus,
  inputClear,
  isLogin,

  url,
}) {
  const [email, setEmail] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [isPassWordFocused, setIsPassWordFocused] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  const FormSubmit = (e) => {
    e.preventDefault();
    const loginInfo = {
      email: email,
      password: password,
    };
    isLogin(loginInfo, `${url}/members/login`, '/');
    console.log(`email : ${email}\npassword : ${password}`);
  };

  useEffect(() => {
    emailReg.test(email) && passwordReg.test(password)
      ? setIsButtonActive(true)
      : setIsButtonActive(false);
  });
  return (
    <>
      <div className='sc-hYbzA-d iHTwyS w-full fixed flex flex-col gap-5 bg-black'>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_0.6c211609.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_1.a4453576.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_2.0b4bed7c.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_3.3d72e3ed.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_4.6242ed78.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_0.6c211609.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_1.a4453576.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_2.0b4bed7c.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_3.3d72e3ed.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_4.6242ed78.png")',
          }}
        ></div>
      </div>
      <div
        className={`${styles.BackGround} flex flex-col justify-center items-center w-screen h-screen font-['Pretendard-Bold']`}
      >
        <div
          className={`${styles.Container} flex flex-col justify-center items-center rounded-lg `}
        >
          <div
            className={`${styles.FormHeader} mt-10 text-center font-black flex flex-col gap-3 mb-3`}
          >
            <h1 className='text-2xl'>
              <Link to={'/'}>Hongflix</Link>
            </h1>
            <p>동시방영 신작부터 역대 인기작까지</p>
            <p>한 곳에서 편안-하게!</p>
          </div>
          <form className={`${styles.Form}`} action='' method='POST'>
            <div
              className={`${styles.FormItem} ${
                isEmailFocused ? styles.FormItemFocus : ''
              } flex flex-col w-80`}
            >
              <label className={`${styles.FormLabel}`} htmlFor=''>
                이메일
              </label>
              <div className={`relative`}>
                <input
                  className={`${styles.FormInput}`}
                  placeholder='이메일 입력해주세요'
                  type='Email'
                  value={email || ''}
                  onChange={(e) => {
                    inputValue(e, setEmail);
                  }}
                  onFocus={() => {
                    handleFocus(isEmailFocused, setIsEmailFocused);
                  }}
                  onBlur={() => {
                    handleFocus(isEmailFocused, setIsEmailFocused);
                  }}
                />
                {isEmailFocused ? (
                  <div
                    className={`${styles.InputButton} flex items-center justify-center rounded-full font-black absolute top-0 right-0`}
                    onMouseDown={(e) => {
                      inputClear(e, setPassword);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-4 h-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div
              className={`${styles.FormItem} ${
                isPassWordFocused ? styles.FormItemFocus : ''
              } relative`}
            >
              <label className={`${styles.FormLabel}`} htmlFor=''>
                비밀번호
              </label>
              <div className={`relative`}>
                <input
                  className={`${styles.FormInput}`}
                  placeholder='비밀번호를 입력해주세요'
                  type='password'
                  value={password || ''}
                  onChange={(e) => {
                    inputValue(e, setPassword);
                  }}
                  onFocus={() => {
                    handleFocus(isPassWordFocused, setIsPassWordFocused);
                  }}
                  onBlur={() => {
                    handleFocus(isPassWordFocused, setIsPassWordFocused);
                  }}
                />
                {isPassWordFocused ? (
                  <div
                    className={`${styles.InputButton} flex items-center justify-center rounded-full font-black absolute top-0 right-0`}
                    onMouseDown={(e) => {
                      inputClear(e, setPassword);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-4 h-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <p className={`${styles.FormText} mt-2`}>
              <Link
                className={`${styles.FormBtn} ${styles.FormBtnCompletion} flex items-center justify-cente w-full`}
                to={'/signup'}
              >
                회원가입
              </Link>
            </p>
            <div className='mb-10'>
              <button
                className={`${styles.FormBtn} ${
                  isButtonActive ? styles.FormBtnCompletion : ''
                } flex items-center justify-cente w-full`}
                disabled={!isButtonActive}
                onClick={(e) => {
                  FormSubmit(e);
                }}
              >
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
