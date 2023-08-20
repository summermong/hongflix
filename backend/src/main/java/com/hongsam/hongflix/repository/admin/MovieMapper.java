package com.hongsam.hongflix.repository.admin;

import com.hongsam.hongflix.domain.Movie;
import com.hongsam.hongflix.domain.MovieUpdateDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface MovieMapper {

    void save(Movie movie);

    void update(@Param("id") Long id, @Param("updateParam") MovieUpdateDto movieUpdateDto);

    Optional<Movie> findById(Long id);

    List<Movie> findAll();


}
