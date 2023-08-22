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
        className="flex w-1/2 h-3/5 bg-indigo-950 rounded-md"
        onClick={closeModal}
      >
        <div className="flex">
          <img src={modalImage} alt="modal" className="mx-5 my-5" />
        </div>
        <div className="relative flex flex-col w-1/2 text-white mx-5 my-5">
          <button
            className="absolute top-1 right-1 text-white text-2xl"
            onClick={closeModal}
          >
            ❌
          </button>
          <div className="flex flex-col justify-evenly flex-1">
            <div className="font-semibold text-2xl mt-5">{modalTitle}</div>
            <div>장르: {modalGenre}</div>
            <div>공개일: {modalReleaseDate}</div>
            <div>
              "이 연예계에서 거짓말은 무기다" 지방 도시에서 일하는 산부인과 의사
              고로. 어느 날, '최애' 아이돌 'B코마치'의 멤버 아이가 그의 앞에
              나타난다. 그녀는 어떤 금단의 비밀을 품고 있었는데... 그런 두
              사람의 '최악'의 만남에서부터 운명이 움직이기 시작한다.
            </div>
            <button className="bg-white rounded-md px-3 py-3 text-indigo-950 text-sm font-black mt-5">
              지금 바로 보러 가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
