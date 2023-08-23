package com.hongsam.hongflix.admin.web;

import com.hongsam.hongflix.admin.domain.content.Content;
import com.hongsam.hongflix.admin.domain.content.ContentCreateResDto;
import com.hongsam.hongflix.admin.domain.content.ContentUpdateReqDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.admin.domain.movie.MovieUpdateReqDto;
import com.hongsam.hongflix.admin.service.content.ContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/contents")
@RequiredArgsConstructor
public class ContentController {

    private final ContentService contentService;

    @GetMapping("/{movieId}")
    public List<ContentCreateResDto> findAllByMovieId(@PathVariable Long movieId) {
        return contentService.findAllByMovieId(movieId);
    }

    @PutMapping("/{contentId}")
    public boolean updateMovie(
            @PathVariable Long contentId,
            @RequestPart ContentUpdateReqDto contentUpdateReqDto,
            MultipartFile file
    ) throws IOException {
        return contentService.update(contentId, contentUpdateReqDto, file);
    }

    @GetMapping("/search")
    public List<Content> searchMovies(@RequestParam String title) {
        return contentService.searchByTitle(title);
    }

    @DeleteMapping("/{contentId}")
    public boolean delete(@PathVariable Long contentId){
        return contentService.delete(contentId);
    }

}
