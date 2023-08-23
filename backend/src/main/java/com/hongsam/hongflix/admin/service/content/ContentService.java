package com.hongsam.hongflix.admin.service.content;

import com.hongsam.hongflix.admin.domain.content.Content;
import com.hongsam.hongflix.admin.domain.content.ContentCreateResDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.admin.domain.movie.MovieUpdateDto;

import java.util.List;
import java.util.Optional;

public interface ContentService {
    Movie save(Content content);

    void update(Long id, MovieUpdateDto movieUpdateDto);

    Optional<Movie> findById(Long id);

    List<ContentCreateResDto> findAllByMovieId(Long movieId);
}
