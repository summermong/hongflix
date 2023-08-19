import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Category = () => {
  // 캐러셀 이미지 크기 & 타이틀
  const Slide = ({ imageSrc }) => (
    <div className="relative mx-1">
      <img className="w-full h-auto" src={imageSrc} alt="carousel" />
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
    speed: 2000,
    slidesToShow: 4,
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
    { imageSrc: `${process.env.PUBLIC_URL}/img/1.jpeg` },
    { imageSrc: `${process.env.PUBLIC_URL}/img/1.jpeg` },
    { imageSrc: `${process.env.PUBLIC_URL}/img/1.jpeg` },
    { imageSrc: `${process.env.PUBLIC_URL}/img/1.jpeg` },
    { imageSrc: `${process.env.PUBLIC_URL}/img/1.jpeg` },
  ];

  const slides2 = [
    { imageSrc: `${process.env.PUBLIC_URL}/img/2.jpeg` },
    { imageSrc: `${process.env.PUBLIC_URL}/img/2.jpeg` },
    { imageSrc: `${process.env.PUBLIC_URL}/img/2.jpeg` },
    { imageSrc: `${process.env.PUBLIC_URL}/img/2.jpeg` },
    { imageSrc: `${process.env.PUBLIC_URL}/img/2.jpeg` },
  ];

  const slides3 = [
    { imageSrc: `${process.env.PUBLIC_URL}/img/3.jpeg` },
    { imageSrc: `${process.env.PUBLIC_URL}/img/3.jpeg` },
    { imageSrc: `${process.env.PUBLIC_URL}/img/3.jpeg` },
    { imageSrc: `${process.env.PUBLIC_URL}/img/3.jpeg` },
    { imageSrc: `${process.env.PUBLIC_URL}/img/3.jpeg` },
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
                <Slide imageSrc={slide.imageSrc} />
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
                <Slide imageSrc={slide.imageSrc} />
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
                <Slide imageSrc={slide.imageSrc} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Category;
