package com.hongsam.hongflix.repository.admin;

import com.hongsam.hongflix.domain.Movie;
import com.hongsam.hongflix.domain.MovieUpdateDto;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

public interface MovieRepository {
     Movie save(Movie movie);

    void update(Long id, MovieUpdateDto movieUpdateDto);

    Optional<Movie> findById(Long id);

    List<Movie> findAll();
}
