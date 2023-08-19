import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  // 캐러셀 이미지 크기 & 타이틀
  const Slide = ({ imageSrc, text }) => (
    <div className="relative">
      <img className="w-screen h-fit" src={imageSrc} alt="carousel" />
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
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="p-5 lg:p-8 mt-10 px-3 font-['Pretendard-Bold']">
      <div className="flex flex-col gap-1 mb-8">
        <div className="font-bold text-base md:text-lg lg:text-xl">
          최근 시청한 콘텐츠
        </div>
        <div>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative flex justify-center items-center"
              >
                <Slide imageSrc={slide.imageSrc} text={slide.text} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-8">
        <div className="font-bold text-base md:text-lg lg:text-xl">
          따끈따끈한 신작
        </div>
        <div>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative flex justify-center items-center"
              >
                <Slide imageSrc={slide.imageSrc} text={slide.text} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-8">
        <div className="font-bold text-base md:text-lg lg:text-xl">
          주간 인기작
        </div>
        <div>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative flex justify-center items-center"
              >
                <Slide imageSrc={slide.imageSrc} text={slide.text} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-8">
        <div className="font-bold text-base md:text-lg lg:text-xl">
          오타쿠가 세상을 구한다
        </div>
        <div>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative flex justify-center items-center"
              >
                <Slide imageSrc={slide.imageSrc} text={slide.text} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Main;
