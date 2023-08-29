import axios from 'axios';
import React, { useEffect } from 'react';

const MyPage = ({ userInfo, fetchLogined }) => {
  useEffect(() => {
    fetchLogined();
  }, []);

  const Payment = () => {
    const onClickPayment = () => {
      const { IMP } = window;
      IMP.init('imp60111328');

      var today = new Date();
      var hours = today.getHours(); // 시
      var minutes = today.getMinutes(); // 분
      var seconds = today.getSeconds(); // 초
      var milliseconds = today.getMilliseconds();
      var makeMerchantUid = `${hours}${minutes}${seconds}${milliseconds}`;

      const data = {
        pg: 'kakaopay',
        pay_method: 'card',
        merchant_uid: `IMP${makeMerchantUid}`,
        name: '테스트 결제',
        amount: 14000,
      };
      IMP.request_pay(data, callback);
    };

    const callback = (res) => {
      const { success, error } = res;
      if (success) {
        const apiUrl = `https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/subscribe`;
        const requestData = {
          available: 1,
          period: 365,
        };

        axios
          .post(apiUrl, requestData, { withCredentials: true })
          .then((res) => {
            console.log('API 요청 성공:', res.data);
            navigator(-1);
          })
          .catch((err) => {
            console.error('API 요청 실패:', err);
          });
      } else {
        console.error(error);
      }
    };

    return (
      <button
        className="bg-indigo-950 text-white rounded-lg px-3 py-1"
        onClick={onClickPayment}
      >
        구독 결제하기
      </button>
    );
  };

  return (
    <div>
      <div className="p-5 lg:p-8 font-['Pretendard-Bold']">
        <div className="font-black text-xl lg:text-2xl">마이 페이지</div>
        <div className="mt-5">
          <div className="text-md lg:text-xl font-semibold">회원 정보</div>
          <div className="mt-5">user name: {userInfo['nickName']}</div>
          <div className="mb-5">user email: {userInfo['email']}</div>
          <div>
            {userInfo['available'] !== 0 && userInfo['period'] !== 0 ? (
              <div className="">구독 잔여일: {userInfo['period']}</div>
            ) : (
              <Payment />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
