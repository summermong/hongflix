package com.hongsam.hongflix.repository;

import com.hongsam.hongflix.domain.SubscribeDto;
import com.hongsam.hongflix.domain.SubscribeUpdateDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Mapper
public interface SubscribeMapper {

    void save(SubscribeDto subscribeDto);

    void update(@Param("id") Long id, @Param("updateDto") SubscribeUpdateDto updateDto);

    Optional<SubscribeDto> findById(Long id);

}
