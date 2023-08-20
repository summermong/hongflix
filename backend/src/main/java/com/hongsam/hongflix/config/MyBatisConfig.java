package com.hongsam.hongflix.config;

import com.hongsam.hongflix.repository.admin.MovieMapper;
import com.hongsam.hongflix.repository.admin.MovieRepository;
import com.hongsam.hongflix.repository.admin.MovieRepositoryIml;
import com.hongsam.hongflix.service.MovieService;
import com.hongsam.hongflix.service.MovieServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

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
