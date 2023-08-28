import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Modal = ({
  modalId,
  modalImage,
  modalTitle,
  modalGenre,
  modalCreatedDate,
  modalExplanation,
  closeModal,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [movieData, setMovieData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 모달 열릴 때 해당 영화 정보를 가져오는 API 호출
    axios
      .get(
        `https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/movies/${modalId}`
      )
      .then((response) => {
        setMovieData(response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [modalId]);

  const handleSubscribe = () => {
    if (isLoggedIn && isSubscribed) {
      navigate(`/list/${modalId}`);
    } else if (!isLoggedIn) {
      alert('로그인을 해주세요.');
      navigate('/login');
    } else if (isLoggedIn && !isSubscribed) {
      alert('구독 결제를 해주세요.');
      navigate('/mypage');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="relative flex flex-col justify-evenly w-3/4 h-4/5 bg-indigo-950 rounded-md shadow-2xl lg:w-1/3 lg:h-3/4"
        onClick={closeModal}
      >
        <div>
          <button
            className="absolute top-2 right-2 text-white text-lg"
            onClick={closeModal}
          >
            ❌
          </button>
          <img
            src={modalImage}
            alt="modal"
            className="w-2/3 mx-auto my-5 sm:w-2/5 md:w-1/3 lg:w-2/3"
          />
        </div>
        {movieData && (
          <div className="text-white p-3 text-xs justify-center sm:text-sm md:text-base lg:text-base text-center">
            <div className="font-semibold">{modalTitle}</div>
            <div className="">장르: {modalGenre}</div>
            <div className="">공개일: {modalCreatedDate}</div>
            <div className="py-4 w-full break-words">{modalExplanation}</div>
          </div>
        )}
        <div className="p-3">
          <button
            className="bg-white text-indigo-950 rounded-sm mb-3 w-full font-bold py-1 text-sm md:text-base lg:text-xl"
            onClick={handleSubscribe}
          >
            지금 바로 보러 가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
