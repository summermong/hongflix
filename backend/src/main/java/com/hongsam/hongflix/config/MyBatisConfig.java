package com.hongsam.hongflix.config;

import com.hongsam.hongflix.admin.repository.admin.*;
import com.hongsam.hongflix.admin.service.MovieService;
import com.hongsam.hongflix.admin.service.MovieServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class MyBatisConfig {

    private final MovieMapper movieMapper;
    private final ContentMapper contentMapper;

    @Bean
    public MovieService movieService() {
        return new MovieServiceImpl(movieRepository(), contentRepository());
    }

    @Bean
    public MovieRepository movieRepository() {
        return new MovieRepositoryImpl(movieMapper);
    }

    @Bean
    public ContentRepository contentRepository() {
        return new ContentRepositoryImpl(contentMapper);
    }
}
