import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./Modal";
import axios from "axios";

const Category = () => {
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalGenre, setModalGenre] = useState("");
  const [modalReleaseDate, setModalReleaseDate] = useState("");
  const [modalCreatedDate, setModalCreatedDate] = useState("");
  const [modalExplanation, setModalExplanation] = useState("");

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
    setModalImage("");
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
      {">"}
    </button>
  );

  // 왼쪽 화살표
  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute left-1.5 top-1/2 text-4xl font-bold text-black -translate-y-2/4 z-10"
      onClick={onClick}
      type="button"
    >
      {"<"}
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

  // 슬라이드1
  useEffect(() => {
    axios
      .get(
        "https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/movies/all"
      )
      .then((response) => {
        const slideData = response.data.map((item) => ({
          imageSrc: item.accessKey,
          title: item.title,
          genre: item.genre,
          createdDate: item.createdDate,
          explanation:
            item.explanation.length > 238
              ? item.explanation.slice(0, 238) + "..."
              : item.explanation,
        }));
        // "로맨스" 장르인 영화만 필터링하여 slide1에 설정
        const RomanceMovies = slideData.filter(
          (movie) => movie.genre === "로맨스"
        );
        setSlide1(RomanceMovies);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/movies/all"
      )
      .then((response) => {
        const slideData = response.data.map((item) => ({
          imageSrc: item.accessKey,
          title: item.title,
          genre: item.genre,
          createdDate: item.createdDate,
          explanation:
            item.explanation.length > 238
              ? item.explanation.slice(0, 238) + "..."
              : item.explanation,
        }));

        // "판타지" 장르인 영화만 필터링하여 slide1에 설정
        const FantasyMovies = slideData.filter(
          (movie) => movie.genre === "판타지"
        );
        setSlide2(FantasyMovies);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/movies/all"
      )
      .then((response) => {
        const slideData = response.data.map((item) => ({
          imageSrc: item.accessKey,
          title: item.title,
          genre: item.genre,
          createdDate: item.createdDate,
          explanation:
            item.explanation.length > 238
              ? item.explanation.slice(0, 238) + "..."
              : item.explanation,
        }));

        // "일상" 장르인 영화만 필터링
        const LifeMovies = slideData.filter((movie) => movie.genre === "일상");
        setSlide3(LifeMovies);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="p-5 lg:p-8 font-['Pretendard-Bold']">
      <div className="font-black text-xl lg:text-2xl">테마 추천</div>
      <div className="mt-5 mb-10">
        <div className="font-semibold text-lg lg:text-xl mb-2">
          달달한 로맨스
        </div>
        <div className="w-auto">
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
      </div>
      <div className="my-5">
        <div className="font-semibold text-lg lg:text-xl mb-2">판타지/SF</div>
        <div className="w-auto">
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
      <div className="my-5">
        <div className="font-semibold text-lg lg:text-xl mb-2">일상</div>
        <div className="w-auto">
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

export default Category;
