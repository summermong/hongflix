package com.hongsam.hongflix.service;

import com.hongsam.hongflix.domain.Movie;
import com.hongsam.hongflix.domain.MovieUpdateDto;

import java.util.List;
import java.util.Optional;

public interface MovieService {

    Movie save(Movie movie);

    void update(Long id, MovieUpdateDto movieUpdateDto);

    Optional<Movie> findById(Long id);

    List<Movie> findMovies();
}
