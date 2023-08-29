import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import videojs from 'video.js';

const List = ({ isLogined }) => {
  const { modalId } = useParams();
  const [data, setData] = useState([]);
  const [movieData, setMovieData] = useState(null); // 추가: 영화 데이터 상태
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/contents/${modalId}`
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('데이터 가져오기 오류:', error);
      });

    // 구독 정보 확인 및 영화 데이터 가져오기
    axios({
      method: 'get',
      url: 'https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/api/home',
      withCredentials: true,
    })
      .then((response) => {
        let login = response.data.login;
        if (login) {
          let subscribe = response.data.loginUserResponse.available;
          if (subscribe === 1) {
            axios
              .get(
                `https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/movies/${modalId}`
              )
              .then((response) => {
                setMovieData(response.data);
              })
              .catch((error) => {
                console.error('영화 데이터 가져오기 오류:', error);
              });
          }
        }
      })
      .catch((error) => {
        console.error('데이터 가져오기 오류:', error);
      });
  }, [modalId]);

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
          <source src="${videoUrl}" type="application/x-mpegURL">
        </video>
        <script>
          var player = videojs('my-video', {
            techOrder: ['html5']
          });
        </script>`;
    }
  };

  const watchContent = (item) => {
    if (!isLogined) {
      alert('로그인을 해주세요.');
      navigate('/login');
    } else if (movieData) {
      // 수정: 영화 데이터가 있는 경우에만 실행
      openVideoWindow(item.accessStreamingUrl);
    } else {
      alert('구독 결제를 해주세요.');
      navigate('/mypage');
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
                onClick={() => watchContent(item)}
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
