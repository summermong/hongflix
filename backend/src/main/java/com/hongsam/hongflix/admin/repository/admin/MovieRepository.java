package com.hongsam.hongflix.admin.repository.admin;

import com.hongsam.hongflix.admin.domain.Movie;
import com.hongsam.hongflix.admin.domain.MovieUpdateDto;

import java.util.List;
import java.util.Optional;

public interface MovieRepository {
     Movie save(Movie movie);

    void update(Long id, MovieUpdateDto movieUpdateDto);

    Optional<Movie> findById(Long id);

    List<Movie> findAll();
}
