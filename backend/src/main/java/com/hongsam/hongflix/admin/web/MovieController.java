package com.hongsam.hongflix.admin.web;

import com.hongsam.hongflix.admin.domain.content.Content;

import com.hongsam.hongflix.admin.domain.content.ContentCreateReqDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.admin.domain.movie.MovieCreateReqDto;
import com.hongsam.hongflix.admin.domain.movie.MovieUpdateReqDto;
import com.hongsam.hongflix.admin.service.movie.MovieService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/movies")
@RequiredArgsConstructor
public class MovieController {

    private final MovieService movieService;

    @PostMapping
    public boolean addMovie(
            @RequestPart MovieCreateReqDto movieCreateReqDto,
            MultipartFile file) throws IOException {
        return movieService.save(movieCreateReqDto, file);
    }

    @GetMapping
    public List<Movie> findMovies(){
        return movieService.findMovies();
    }

    @GetMapping("/{movieId}")
    public Optional<Movie> getMovie(@PathVariable long movieId){
        return movieService.findById(movieId);
    }



    @PostMapping(path= "/{movieId}", consumes= {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public Content addContentToMovie(
            @PathVariable Long movieId,
            @RequestPart ContentCreateReqDto contentCreateReqDto,
            MultipartFile file) throws IOException {
        return movieService.addContentToMovie(movieId, contentCreateReqDto, file);
    }

    @GetMapping("/search")
    public List<Movie> searchMovies(@RequestParam String title) {
        return movieService.searchByTitle(title);
    }

    @PutMapping("/{movieId}")
    public boolean updateMovie(
            @PathVariable long movieId,
            @RequestPart MovieUpdateReqDto movieUpdateReqDto,
            MultipartFile file
    ) throws IOException {
        return movieService.update(movieId, movieUpdateReqDto, file);
    }


    @DeleteMapping("/{movieId}")
    public boolean deleteMovie(@PathVariable long movieId){
        return movieService.delete(movieId);
    }






}
