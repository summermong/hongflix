package com.hongsam.hongflix.admin.service;

import com.hongsam.hongflix.admin.domain.Content;
import com.hongsam.hongflix.admin.domain.ContentCreateResDto;
import com.hongsam.hongflix.admin.domain.Movie;
import com.hongsam.hongflix.admin.domain.MovieUpdateDto;
import com.hongsam.hongflix.admin.repository.admin.ContentMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ContentServiceImpl implements ContentService{

    private final ContentMapper contentMapper;

    @Override
    public Movie save(Content content) {
        return null;
    }

    @Override
    public void update(Long id, MovieUpdateDto movieUpdateDto) {

    }

    @Override
    public Optional<Movie> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<ContentCreateResDto> findAllByMovieId(Long movieId) {
        return contentMapper.findAllByMovieId(movieId);
    }
}
