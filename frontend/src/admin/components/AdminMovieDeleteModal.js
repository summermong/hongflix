/** @format */

import React from 'react';
import styles from '../Admin.module.css';
import axios from 'axios';

export default function AdminMovieDeleteModal({
  setDeleteModalView,
  seleteId,
  apiUrl,
}) {
  console.log(`seleteId : ${seleteId}`);
  const deleteMovie = async () => {
    await axios
      .delete(`${apiUrl}movies/${seleteId}`, { withCredentials: false })
      .then((res) => {
        console.log(res.data);
        setDeleteModalView(false);
      })
      .catch((err) => {
        console.log(`ERROR!!${err}`);
        alert(err);
        setDeleteModalView(false);
      });
  };
  return (
    <div
      className={`${styles.modalContainer} w-5/6 h-1/6 md:w-4/6 md:h-auto bg-black fixed flex flex-col items-center justify-center gap-10 border`}
    >
      <p>정말 삭제하시겠습니까?</p>
      <div className='flex gap-10'>
        <button
          onClick={() => {
            setDeleteModalView(false);
          }}
        >
          취소
        </button>
        <button
          onClick={() => {
            deleteMovie();
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
}
