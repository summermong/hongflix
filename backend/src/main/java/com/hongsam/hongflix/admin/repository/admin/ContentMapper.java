package com.hongsam.hongflix.admin.repository.admin;

import com.hongsam.hongflix.admin.domain.Content;
import com.hongsam.hongflix.admin.domain.ContentCreateResDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ContentMapper {

    void save(Content content);

    List<ContentCreateResDto> findAllByMovieId(Long movieId);


//    void update(@Param("id") Long id, @Param("updateParam") ContentUpdateReqDto contentUpdateReqDto);
//
//    Optional<Content> findById(Long id);



}
