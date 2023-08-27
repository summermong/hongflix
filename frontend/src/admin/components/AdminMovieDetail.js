/** @format */

import axios from 'axios';
import styles from '../Admin.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminMovieUpdateModal({ setDeatilModalView, movie }) {
  console.log(movie);

  return (
    <div
      className={`${styles.modalContainer} flex flex-col items-center justify-center w-full fixed md:w-2/3 rounded-lg gap-3 border pt-5 pb-5`}
    >
      <h1 className='text-3xl'>영화 수정</h1>
      <form className='flex w-4/5 flex-col justify-center gap-2' action='POST'>
        <label htmlFor='title'>영화 제목</label>
        <input className='p-3 border rounded-lg' type='text' />
        <label htmlFor='content'>연령</label>
        <input className='p-3 border rounded-lg' type='text' />
        <label htmlFor='title'>장르</label>
        <input className='p-3 border rounded-lg' type='text' />
        <label htmlFor='title'>기존 이미지</label>
        <div className='p-3 border rounded-lg'>
          <img src='' alt='' />
        </div>
        <label htmlFor=''>
          수정할 이미지 <span className='text-red-600'>필수 기입</span>
        </label>
        <input className='p-3 border rounded-lg' type='file' />
        <label htmlFor='title'>내용</label>
        <textarea className='p-3 border rounded-lg' type='text' />
      </form>
      <div className='flex gap-5'>
        <button
          className={`${styles.contentModalCreateBtn}`}
          onClick={() => {
            setDeatilModalView(false);
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
