package com.hongsam.hongflix.admin.web;

import com.hongsam.hongflix.admin.domain.content.ContentCreateResDto;
import com.hongsam.hongflix.admin.service.content.ContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contents")
@RequiredArgsConstructor
public class ContentController {

    private final ContentService contentService;

    @GetMapping("{movieId}")
    public List<ContentCreateResDto> findAllByMovieId(@PathVariable Long movieId) {
        return contentService.findAllByMovieId(movieId);
    }
}
