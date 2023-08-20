package com.hongsam.hongflix.repository.admin;

import com.hongsam.hongflix.domain.Movie;
import com.hongsam.hongflix.domain.MovieUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MovieRepositoryIml implements MovieRepository{

    private final MovieMapper movieMapper;

    @Override
    public Movie save(Movie movie) {
        movieMapper.save(movie);
        return movie;
    }

    @Override
    public void update(Long movieId, MovieUpdateDto movieUpdateDto) {
        movieMapper.update(movieId, movieUpdateDto);
    }

    @Override
    public Optional<Movie> findById(Long movieId) {
        return movieMapper.findById(movieId);
    }

    @Override
    public List<Movie> findAll() {
        return movieMapper.findAll();
    }
}
