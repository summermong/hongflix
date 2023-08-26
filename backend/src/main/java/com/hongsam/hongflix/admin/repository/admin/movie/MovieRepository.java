package com.hongsam.hongflix.admin.repository.admin.movie;

import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.admin.domain.movie.MovieFiveGenreReqDto;
import com.hongsam.hongflix.admin.domain.movie.MovieTwoGenreReqDto;
import com.hongsam.hongflix.admin.domain.movie.MovieUpdateReqDto;

import java.util.List;
import java.util.Optional;

public interface MovieRepository {
     Movie save(Movie movie);

    Integer update(Long id, MovieUpdateReqDto movieUpdateReqDto);

    boolean delete(Long id);

    Optional<Movie> findById(Long id);

    List<Movie> findAll();

    List<Movie> searchByTitle(String title);

    List<Movie> getMoviesByTwoGenres(MovieTwoGenreReqDto movieTwoGenreReqDto);

    List<Movie> findByFiveGenres(MovieFiveGenreReqDto movieFiveGenreReqDto);

    List<Movie> findAllMovies();
}
