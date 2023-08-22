package com.hongsam.hongflix.admin.web;

import com.hongsam.hongflix.admin.domain.Content;
import com.hongsam.hongflix.admin.domain.Movie;
import com.hongsam.hongflix.admin.service.MovieService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/movies")
@RequiredArgsConstructor
public class MovieController {

    private final MovieService movieService;

    @GetMapping
    public List<Movie> findMovies(){
        return movieService.findMovies();
    }

    @GetMapping("/{movieId}")
    public Optional<Movie> getMovie(@PathVariable long movieId){
        return movieService.findById(movieId);
    }

    @PostMapping
    public Movie addMovie(@RequestBody Movie movie){
        return movieService.save(movie);
    }

    @PostMapping("/{movieId}")
    public Content addContentToMovie(@PathVariable Long movieId, @RequestBody Content content) {
        return movieService.addContentToMovie(movieId, content);
    }





}
