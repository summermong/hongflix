import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '../pages/Modal';
import axios from 'axios';

const Main = () => {
  // 구독 여부 상태
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalGenre, setModalGenre] = useState('');
  const [modalCreatedDate, setModalCreatedDate] = useState('');
  const [modalExplanation, setModalExplanation] = useState('');

  // openModal 함수 정의
  const openModal = (imageSrc, title, genre, createdDate, explanation) => {
    setModal(true);
    setModalImage(imageSrc);
    setModalTitle(title);
    setModalGenre(genre);
    setModalCreatedDate(createdDate);
    setModalExplanation(explanation);
  };

  // closeModal 함수 정의
  const closeModal = () => {
    setModal(false);
    setModalImage('');
  };

  // 캐러셀 이미지 크기 & 타이틀
  const Slide = ({ imageSrc, title, genre, createdDate, explanation }) => (
    <div className="relative mx-1 mb-1">
      <img
        className="object-cover"
        src={imageSrc}
        alt="carousel"
        onClick={() =>
          openModal(imageSrc, title, genre, createdDate, explanation)
        }
      />
      <div className="py-2 text-center">{title}</div>
    </div>
  );

  // 오른쪽 화살표
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute right-1.5 top-1/2 text-4xl font-bold text-black -translate-y-2/4 z-10"
      onClick={onClick}
      type="button"
    >
      {'>'}
    </button>
  );

  // 왼쪽 화살표
  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute left-1.5 top-1/2 text-4xl font-bold text-black -translate-y-2/4 z-10"
      onClick={onClick}
      type="button"
    >
      {'<'}
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 376, // Breakpoint for screens less than 768px wide
        settings: {
          slidesToShow: 1, // Display one slide at a time
          slidesToScroll: 1, // Scroll one slide at a time
        },
      },
    ],
  };

  const [slide1, setSlide1] = useState([]);
  const [slide2, setSlide2] = useState([]);
  const [slide3, setSlide3] = useState([]);
  const [slide4, setSlide4] = useState([]);

  useEffect(() => {
    axios
      .get('https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/movies')
      .then((response) => {
        const slideData = response.data.map((item) => ({
          imageSrc: item.accessKey,
          title: item.title,
          genre: item.genre,
          createdDate: item.createdDate,
          explanation:
            item.explanation.length > 238
              ? item.explanation.slice(0, 238) + '...'
              : item.explanation,
        }));
        setSlide1(slideData);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/movies')
      .then((response) => {
        const slideData = response.data.map((item) => ({
          imageSrc: item.accessKey,
          title: item.title,
          genre: item.genre,
          createdDate: item.createdDate,
          explanation:
            item.explanation.length > 238
              ? item.explanation.slice(0, 238) + '...'
              : item.explanation,
        }));

        slideData.sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
        );
        const top8 = slideData.slice(0, 8);

        setSlide2(top8);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/movies')
      .then((response) => {
        const slideData = response.data.map((item) => ({
          imageSrc: item.accessKey,
          title: item.title,
          genre: item.genre,
          createdDate: item.createdDate,
          explanation:
            item.explanation.length > 238
              ? item.explanation.slice(0, 238) + '...'
              : item.explanation,
        }));

        // "스릴러" 장르인 영화만 필터링하여 slide2에 설정
        const thrillerMovies = slideData.filter(
          (movie) => movie.genre === '스릴러'
        );
        setSlide3(thrillerMovies);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/movies')
      .then((response) => {
        const slideData = response.data.map((item) => ({
          imageSrc: item.accessKey,
          title: item.title,
          genre: item.genre,
          createdDate: item.createdDate,
          explanation:
            item.explanation.length > 238
              ? item.explanation.slice(0, 238) + '...'
              : item.explanation,
        }));

        // "스릴러" 장르인 영화만 필터링하여 slide2에 설정
        const thrillerMovies = slideData.filter(
          (movie) => movie.genre === '스릴러'
        );
        setSlide4(thrillerMovies);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="p-5 lg:p-8 mt-5 px-3 font-['Pretendard-Bold']">
      <div className="flex flex-col gap-1 mb-8">
        <div className="font-bold text-base mt-3 md:text-lg lg:text-xl">
          최근 시청한 콘텐츠(수정 필요)
        </div>
        <Slider {...settings}>
          {slide1.map((slide, index) => (
            <div key={index}>
              <Slide
                imageSrc={slide.imageSrc}
                title={slide.title}
                genre={slide.genre}
                createdDate={slide.createdDate}
                explanation={slide.explanation}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-col gap-1 mb-8">
        <div className="font-bold text-base mt-3 md:text-lg lg:text-xl">
          따끈따끈한 신작(releaseDate순)
        </div>
        <div>
          <Slider {...settings}>
            {slide2.map((slide, index) => (
              <div key={index}>
                <Slide
                  imageSrc={slide.imageSrc}
                  title={slide.title}
                  genre={slide.genre}
                  createdDate={slide.createdDate}
                  explanation={slide.explanation}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-8">
        <div className="font-bold text-base mt-3 md:text-lg lg:text-xl">
          주간 인기작(수정 필요)
        </div>
        <div>
          <Slider {...settings}>
            {slide3.map((slide, index) => (
              <div key={index}>
                <Slide
                  imageSrc={slide.imageSrc}
                  title={slide.title}
                  genre={slide.genre}
                  createdDate={slide.createdDate}
                  explanation={slide.explanation}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-8">
        <div className="font-bold text-base mt-3 md:text-lg lg:text-xl">
          스릴러/미스터리
        </div>
        <div>
          <Slider {...settings}>
            {slide4.map((slide, index) => (
              <div key={index}>
                <Slide
                  imageSrc={slide.imageSrc}
                  title={slide.title}
                  genre={slide.genre}
                  createdDate={slide.createdDate}
                  explanation={slide.explanation}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {modal && (
        <Modal
          modalImage={modalImage}
          modalTitle={modalTitle}
          modalGenre={modalGenre}
          modalCreatedDate={modalCreatedDate}
          modalExplanation={modalExplanation}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Main;
