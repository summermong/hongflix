import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import Modal from './Modal';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const debounceTimerRef = useRef(null);

  useEffect(() => {
    clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      axios
        .get(
          `https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/movies/search?title=${debouncedSearchTerm}`
        )
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  const openModal = (movie) => {
    setModalMovie(movie);
    setModalVisible(true);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMovie, setModalMovie] = useState(null);

  axios
    .get(
      `https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/contents/18`
    )
    .then((response) => console.log(response));

  return (
    <div className="p-5 lg:p-8 font-['Pretendard-Bold']">
      <div className="font-black text-xl lg:text-2xl">검색</div>
      <div className="mb-5">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="찾고 싶은 작품을 입력하세요."
          className="mt-2 border border-gray-300 px-3 py-1 rounded-md w-72 focus:outline-none focus:ring-1 focus:border-blue-100"
        />
      </div>
      <hr />
      <div className="mt-5 font-semibold">검색 결과</div>
      {searchResults.length > 0 ? (
        <div className="mt-3">
          {searchResults.map((movie) => (
            <div key={movie.id} className="flex space-x-3 my-3 relative">
              <div
                className="relative sm:w-full md:w-1/5 cursor-pointer"
                onClick={() => openModal(movie)}
                onMouseEnter={() => setHoveredMovie(movie)}
                onMouseLeave={() => setHoveredMovie(null)}
              >
                <img
                  src={movie.accessKey}
                  alt={movie.title}
                  className="hover:brightness-50 relative"
                />
                {hoveredMovie === movie && (
                  <div className="absolute text-white top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-lg">
                    {movie.title}
                  </div>
                )}
              </div>
              {modalVisible && (
                <Modal
                  modalImage={modalMovie.accessKey}
                  modalTitle={modalMovie.title}
                  modalGenre={modalMovie.genre}
                  modalCreatedDate={modalMovie.createdDate}
                  modalExplanation={modalMovie.explanation}
                  closeModal={() => setModalVisible(false)} // 모달 닫기 버튼 클릭 시
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-3">검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default Search;
