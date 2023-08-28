/** @format */

import React from 'react';

const MyPage = ({ userInfo }) => {
  return (
    <div>
      <div className="p-5 lg:p-8 font-['Pretendard-Bold']">
        <div className='font-black text-xl lg:text-2xl'>마이 페이지</div>
        <div className='mt-5'>
          <div className='text-md lg:text-xl font-semibold'>회원 정보</div>
          <div className='mt-5'>user name: {userInfo['nickName']}</div>
          <div className='mb-5'>user email: {userInfo['email']}</div>
          <div>
            {userInfo['available'] !== 0 && userInfo['period'] !== 0 ? (
              <div className=''>구독 잔여일: {userInfo['period']}</div>
            ) : (
              <button className=' bg-indigo-950 text-white rounded-lg px-3 py-1'>
                구독 결제하기
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
