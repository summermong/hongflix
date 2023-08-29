import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import videojs from 'video.js';

const List = () => {
  const { modalId } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/api/home',
          {
            withCredentials: true,
          }
        );
        const login = response.data.login;
        if (login) {
          const subscribe = response.data.loginUserResponse.available;
          if (subscribe === 1) {
            const contentResponse = await axios.get(
              `https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/contents/${modalId}`
            );
            if (contentResponse.data.length === 0) {
              alert('아직 등록된 회차가 없어요🥲');
              navigate(-1);
            } else {
              setData(contentResponse.data);
            }
          } else {
            alert('구독을 해주세요.');
            navigate('/mypage');
          }
        } else {
          alert('로그인을 해주세요.');
          navigate('/login');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [modalId, navigate]);

  const openVideoWindow = (videoUrl) => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.body.innerHTML = `
        <link href="https://vjs.zencdn.net/7.15.4/video-js.css" rel="stylesheet">
        <script src="https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"></script>
        <script src="https://vjs.zencdn.net/7.17.0/video.min.js"></script>
        
        <style>
          body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          #my-video {
            width: 100%;
            height: 100%;
          }
        </style>
        <video id="my-video" class="video-js vjs-default-skin" controls>
          <source src="${videoUrl}" type="vnd.apple.mpegURL">
        </video>
        <script>
          var player = videojs('my-video', {
            techOrder: ['html5']
          });
        </script>`;
    }
  };

  return (
    <div className="p-5 lg:p-8 mt-5 px-3 font-['Pretendard-Bold']">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-between mb-5 border-2 p-5"
        >
          <div className="flex gap-5 items-center">
            <div style={{ flex: '0 0 250px' }}>
              <img
                src={item.accessUrl}
                alt="회차 이미지"
                className="w-full h-auto cursor-pointer"
                onClick={() => openVideoWindow(item.accessStreamingUrl)}
              />
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
