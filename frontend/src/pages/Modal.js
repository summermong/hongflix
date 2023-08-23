import React from 'react';

const Modal = ({
  modalImage,
  modalTitle,
  modalGenre,
  modalReleaseDate,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="flex w-3/4 h-4/5 bg-indigo-950 rounded-md shadow-2xl lg:w-1/3 lg:h-2/3"
        onClick={closeModal}
      >
        <div className="flex relative flex-col">
          <button
            className="absolute top-2 right-2 text-white text-lg"
            onClick={closeModal}
          >
            ❌
          </button>
          <img
            src={modalImage}
            alt="modal"
            className="w-2/3 mx-auto my-5 sm:w-2/5 md:w-1/3 lg:w-1/3"
          />
          <div className="flex flex-col  text-white text-xs sm:text-sm mx-3 justify-center">
            <div className="flex flex-col items-center">
              <div className="font-semibold text-base ">{modalTitle}</div>
              <div className="">장르: {modalGenre}</div>
              <div className="">공개일: {modalReleaseDate}</div>
              <div className="py-4">
                "이 연예계에서 거짓말은 무기다" 지방 도시에서 일하는 산부인과
                의사 고로. 어느 날, '최애' 아이돌 'B코마치'의 멤버 아이가 그의
                앞에 나타난다. 그녀는 어떤 금단의 비밀을 품고 있었는데... 그런
                두 사람의 '최악'의 만남에서부터 운명이 움직이기 시작한다.
              </div>
              <button className="bg-white text-indigo-950 rounded-sm p-1 w-full font-bold">
                지금 바로 보러 가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
