package com.hongsam.hongflix.admin.repository.admin.movie;

import com.hongsam.hongflix.admin.domain.movie.MovieUpdateDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MovieRepositoryImpl implements MovieRepository{

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
