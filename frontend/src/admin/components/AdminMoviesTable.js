/** @format */

import React from 'react';
import styles from '../Admin.module.css';

export default function AdminMoviesTable({
  movies,
  navigator,
  updateModalView,
  setUpdateModalView,
  deleteModalView,
  setDeleteModalView,
  modalSwitch,
}) {
  console.log(movies);
  return (
    <div>
      <table className='border w-full text-center rounded-lg'>
        <thead className={`${styles.adminTableHead} border`}>
          <tr>
            <th className='p-2 border w-2/12'>영화제목</th>
            <th className='p-2 border w-1/12'>연령</th>
            <th className='p-2 border w-4/12'>내용</th>
            <th className='p-2 border w-2/12'>장르</th>
            <th className='p-2 border w-1/12'>수정</th>
            <th className='p-2 border w-1/12'>삭제</th>
          </tr>
        </thead>
        <tbody className=''>
          {movies.map((el, i) => {
            return (
              <tr key={i}>
                <td
                  className='p-2 border '
                  onClick={() => {
                    navigator(`contents/${el['title']}/${el['id']}`);
                  }}
                >
                  {el['title']}
                </td>
                <td className='p-2 border'>{el['subTitle']}</td>
                <td className='p-2 border'>
                  <p className=''>{el['explanation']}</p>
                </td>
                <td className='p-2 border '>{el['genre']}</td>
                <td className='p-2 border '>
                  <button
                    onClick={(e) => {
                      modalSwitch(
                        e,
                        updateModalView,
                        setUpdateModalView,
                        +el['id']
                      );
                    }}
                  >
                    수정
                  </button>
                </td>
                <td className='p-2 border w-14'>
                  <button
                    onClick={(e) => {
                      modalSwitch(
                        e,
                        deleteModalView,
                        setDeleteModalView,
                        +el['id']
                      );
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
