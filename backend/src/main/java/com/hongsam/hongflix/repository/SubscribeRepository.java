package com.hongsam.hongflix.repository;

import com.hongsam.hongflix.domain.SubscribeDto;
import com.hongsam.hongflix.domain.SubscribeUpdateDto;

import java.util.Optional;

public interface SubscribeRepository {

    SubscribeDto save(SubscribeDto subscribeDto);

    void update(Long id, SubscribeUpdateDto updateDto);

    Optional<SubscribeDto> findById(Long id);
}
