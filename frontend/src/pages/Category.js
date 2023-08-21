import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Category = () => {
  // 캐러셀 이미지 크기 & 타이틀
  const Slide = ({ imageSrc, text }) => (
    <div className="relative mx-1 md:mb-1">
      <Link to="/">
        <img
          className="h-72 w-full object-cover"
          src={imageSrc}
          alt="carousel"
        />
        <div className="py-2 text-center">{text}</div>
      </Link>
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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for screens less than 768px wide
        settings: {
          slidesToShow: 1, // Display one slide at a time
          slidesToScroll: 1, // Scroll one slide at a time
        },
      },
    ],
  };

  const slides1 = [
    { imageSrc: `${process.env.PUBLIC_URL}/img/1.jpeg`, text: '최애의 아이' },
    { imageSrc: `${process.env.PUBLIC_URL}/img/2.jpeg`, text: '최애의 아이' },
    { imageSrc: `${process.env.PUBLIC_URL}/img/1.jpeg`, text: '최애의 아이' },
    { imageSrc: `${process.env.PUBLIC_URL}/img/1.jpeg`, text: '최애의 아이' },
    { imageSrc: `${process.env.PUBLIC_URL}/img/1.jpeg`, text: '최애의 아이' },
  ];

  const slides2 = [
    { imageSrc: `${process.env.PUBLIC_URL}/img/2.jpeg`, text: '주술회전' },
    { imageSrc: `${process.env.PUBLIC_URL}/img/2.jpeg`, text: '주술회전' },
    { imageSrc: `${process.env.PUBLIC_URL}/img/2.jpeg`, text: '주술회전' },
    { imageSrc: `${process.env.PUBLIC_URL}/img/2.jpeg`, text: '주술회전' },
    { imageSrc: `${process.env.PUBLIC_URL}/img/2.jpeg`, text: '주술회전' },
  ];

  const slides3 = [
    { imageSrc: `${process.env.PUBLIC_URL}/img/3.jpeg`, text: '도쿄 리벤저스' },
    { imageSrc: `${process.env.PUBLIC_URL}/img/3.jpeg`, text: '도쿄 리벤저스' },
    { imageSrc: `${process.env.PUBLIC_URL}/img/3.jpeg`, text: '도쿄 리벤저스' },
    { imageSrc: `${process.env.PUBLIC_URL}/img/3.jpeg`, text: '도쿄 리벤저스' },
    { imageSrc: `${process.env.PUBLIC_URL}/img/3.jpeg`, text: '도쿄 리벤저스' },
  ];

  return (
    <div className="p-5 lg:p-8 font-['Pretendard-Bold']">
      <div className="font-black text-xl lg:text-2xl">테마 추천</div>
      <div className="mt-5 mb-10">
        <div className="font-semibold text-lg lg:text-xl mb-2">
          달달한 로맨스
        </div>
        <div className="w-auto">
          <Slider {...settings}>
            {slides1.map((slide, index) => (
              <div key={index}>
                <Slide imageSrc={slide.imageSrc} text={slide.text} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="my-5">
        <div className="font-semibold text-lg lg:text-xl mb-2">호러/스릴러</div>
        <div className="w-auto">
          <Slider {...settings}>
            {slides2.map((slide, index) => (
              <div key={index}>
                <Slide imageSrc={slide.imageSrc} text={slide.text} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="my-5">
        <div className="font-semibold text-lg lg:text-xl mb-2">다큐멘터리</div>
        <div className="w-auto">
          <Slider {...settings}>
            {slides3.map((slide, index) => (
              <div key={index}>
                <Slide imageSrc={slide.imageSrc} text={slide.text} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Category;
