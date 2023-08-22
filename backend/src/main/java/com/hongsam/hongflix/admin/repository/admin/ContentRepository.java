package com.hongsam.hongflix.admin.repository.admin;

import com.hongsam.hongflix.admin.domain.*;

import java.util.List;
import java.util.Optional;

public interface ContentRepository {
    Content save(Content content);

    List<ContentCreateResDto> findAllByMovieId(Long movieId);

//    void update(Long id, ContentUpdateReqDto contentUpdateReqDto);
//
//    Optional<Content> findById(Long id);


}
