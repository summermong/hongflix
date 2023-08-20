package com.hongsam.hongflix.service;

import com.hongsam.hongflix.domain.Movie;
import com.hongsam.hongflix.domain.MovieUpdateDto;
import com.hongsam.hongflix.repository.admin.MovieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MovieServiceImpl implements MovieService{

    private final MovieRepository movieRepository;

    @Override
    public Movie save(Movie movie) {
        return movieRepository.save(movie);
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
