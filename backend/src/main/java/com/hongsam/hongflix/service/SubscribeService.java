package com.hongsam.hongflix.service;

import com.hongsam.hongflix.domain.SubscribeDto;
import com.hongsam.hongflix.domain.SubscribeUpdateDto;
import com.hongsam.hongflix.repository.SubscribeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SubscribeService {
    private final SubscribeRepository repository;

    public void save(SubscribeDto subscribeDto) {
        repository.save(subscribeDto);
    }

    public void update(Long id, SubscribeUpdateDto updateDto) {
        repository.update(id, updateDto);
    }

}
