/** @format */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/contents/32'
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="p-5 lg:p-8 mt-5 px-3 font-['Pretendard-Bold']">
      {data.map((item, index) => (
        <div
          key={index}
          className='flex flex-col justify-between mb-5 border-2 p-5'
        >
          <div className='flex gap-5 items-center'>
            <div style={{ flex: '0 0 250px' }}>
              <Link to={item.accessStreamingUrl}>
                <img
                  src={item.accessUrl}
                  alt='회차 이미지'
                  className='w-full h-auto'
                />
              </Link>
            </div>
            <div>
              <div>
                <div>{item.title}</div>
                <div>{item.explanation}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
