import React, { useState, useEffect, useRef, useMemo } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const movies = useMemo(
    () => [
      { movieTitle: 'Movie 1' },
      { movieTitle: 'Movie 2' },
      { movieTitle: '주술회전' },
      { movieTitle: '최애의 아이' },
      { movieTitle: '카게구루이' },
    ],
    []
  );

  const debounceTimerRef = useRef(null);

  useEffect(() => {
    clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const results = movies.filter((movie) =>
        movie.movieTitle.includes(debouncedSearchTerm)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm, movies]);

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
        <ul>
          {searchResults.map((movie, index) => (
            <li key={index}>{movie.movieTitle}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-3">검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default Search;
