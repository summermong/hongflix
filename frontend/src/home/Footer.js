import React from 'react';

const Footer = () => {
  return (
    <div className=" w-full h-1/3 bg-indigo-950 mt-10 text-white font-['Pretendard-Bold'] text-xs md:text-sm lg:text-sm">
      <div className="text-center pt-5 text-xl font-black md:text-lg lg:text-base">
        Hongflix
      </div>
      <div className="flex justify-evenly pt-10 pb-8 sticky top-0 text-xs md:text-sm lg:text-sm">
        <div>회사 소개</div>
        <div>고객 센터</div>
        <div>공지사항</div>
        <div>이용 약관</div>
        <div>저작권 표기</div>
      </div>
    </div>
  );
};

export default Footer;
