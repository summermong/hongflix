package com.hongsam.hongflix.admin.repository.admin.movie;

import com.hongsam.hongflix.admin.domain.movie.MovieUpdateDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
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
