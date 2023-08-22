package com.hongsam.hongflix.admin.service;

import com.hongsam.hongflix.admin.domain.Content;
import com.hongsam.hongflix.admin.domain.MovieUpdateDto;
import com.hongsam.hongflix.admin.domain.Movie;
import com.hongsam.hongflix.admin.repository.admin.ContentRepository;
import com.hongsam.hongflix.admin.repository.admin.MovieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MovieServiceImpl implements MovieService{

    private final MovieRepository movieRepository;

    private final ContentRepository contentRepository;

    @Override
    public Movie save(Movie movie) {
        return movieRepository.save(movie);
    }

    @Override
    @Transactional
    public Content addContentToMovie(Long movieId, Content content) {
        content.setMovieId(movieId);
        return contentRepository.save(content);
    }


    @Override
    public void update(Long id, MovieUpdateDto movieUpdateDto) {
        movieRepository.update(id, movieUpdateDto);
    }

    @Override
    public Optional<Movie> findById(Long id) {
        return movieRepository.findById(id);
    }

    @Override
    public List<Movie> findMovies() {
        return movieRepository.findAll();
    }
}
