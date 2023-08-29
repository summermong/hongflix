/** @format */

import styles from '../Admin.module.css';

export default function AddminMovieDetail({ setDeatilModalView, movie }) {
  console.log(movie);

  return (
    <div
      className={`${styles.modalContainer} flex flex-col items-center justify-center w-full fixed md:w-2/3 rounded-lg gap-3 border p-5`}
    >
      <div>
        <img src={movie['accessKey']} alt='' />
      </div>
      <h1 className='text-3xl'>{movie['title']}</h1>
      <div>
        <p>{movie['subTitle']}</p>
      </div>
      <div>
        <p>{movie['genre']}</p>
      </div>
      <div>
        <p>{movie['createdDate']}</p>
      </div>
      <div>
        <p>{movie['explanation']}</p>
      </div>
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
