package com.hongsam.hongflix.admin.service.movie;

import com.hongsam.hongflix.admin.domain.content.Content;
import com.hongsam.hongflix.admin.domain.content.ContentCreateReqDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.admin.domain.movie.MovieCreateReqDto;
import com.hongsam.hongflix.admin.domain.movie.MovieUpdateDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface MovieService {

    boolean save(MovieCreateReqDto movieCreateReqDto, MultipartFile file) throws IOException;

    Content addContentToMovie(Long movieId, ContentCreateReqDto contentCreateReqDto, MultipartFile file) throws IOException;

    void update(Long id, MovieUpdateDto movieUpdateDto);

    Optional<Movie> findById(Long id);

    List<Movie> findMovies();
}
