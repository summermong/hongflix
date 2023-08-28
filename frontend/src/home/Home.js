import React from 'react';
import Banner from './Banner';
import Main from './Main';

const Home = ({ userInfo, isLogined }) => {
  return (
    <div>
      <Banner />
      <Main userInfo={userInfo} isLogined={isLogined} />
    </div>
  );
};

export default Home;
