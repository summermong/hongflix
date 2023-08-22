package com.hongsam.hongflix.admin.service;

import com.hongsam.hongflix.admin.domain.Content;
import com.hongsam.hongflix.admin.domain.ContentCreateResDto;
import com.hongsam.hongflix.admin.domain.Movie;
import com.hongsam.hongflix.admin.domain.MovieUpdateDto;

import java.util.List;
import java.util.Optional;

public interface ContentService {
    Movie save(Content content);

    void update(Long id, MovieUpdateDto movieUpdateDto);

    Optional<Movie> findById(Long id);

    List<ContentCreateResDto> findAllByMovieId(Long movieId);
}
