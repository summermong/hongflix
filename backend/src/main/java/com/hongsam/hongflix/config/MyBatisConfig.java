package com.hongsam.hongflix.config;

import com.hongsam.hongflix.admin.repository.admin.MovieMapper;
import com.hongsam.hongflix.admin.repository.admin.MovieRepository;
import com.hongsam.hongflix.admin.repository.admin.MovieRepositoryIml;
import com.hongsam.hongflix.admin.service.MovieService;
import com.hongsam.hongflix.admin.service.MovieServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class MyBatisConfig {

    private final MovieMapper movieMapper;

    @Bean
    public MovieService movieService() {
        return new MovieServiceImpl(movieRepository());
    }

    @Bean
    public MovieRepository movieRepository() {
        return new MovieRepositoryIml(movieMapper);
    }
}
