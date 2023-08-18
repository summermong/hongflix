import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  // 캐러셀 이미지 크기 & 타이틀
  const Slide = ({ imageSrc, text }) => (
    <div style={{ position: 'relative' }}>
      <img
        src={imageSrc}
        alt="carousel"
        style={{
          display: 'block',
          margin: '0 auto',
          width: '100%',
        }}
      />
      <div
        className="text-xs md:text-base lg:text-sm"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#1d1b4b',
          padding: '5px 20px',
          color: 'white',
          textAlign: 'center',
          borderRadius: '20px',
        }}
      >
        {text}
      </div>
    </div>
  );

  // 오른쪽 화살표
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      type="button"
      style={{
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'none',
        border: 'none',
        fontSize: '36px',
        fontWeight: 'bold',
        color: 'black',
        zIndex: 1,
      }}
    >
      {'>'}
    </button>
  );

  // 왼쪽 화살표
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      type="button"
      style={{
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'none',
        border: 'none',
        fontSize: '36px',
        fontWeight: 'bold',
        color: 'black',
        zIndex: 1,
      }}
    >
      {'<'}
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slideStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const slides = [
    { imageSrc: `${process.env.PUBLIC_URL}/img/1.jpg`, text: '최애의 아이' },
    { imageSrc: `${process.env.PUBLIC_URL}/img/2.png`, text: '주술회전' },
    // Add more slide objects as needed
  ];

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} style={slideStyle}>
            <Slide imageSrc={slide.imageSrc} text={slide.text} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Main;
