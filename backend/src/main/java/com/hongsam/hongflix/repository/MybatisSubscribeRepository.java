package com.hongsam.hongflix.repository;

import com.hongsam.hongflix.domain.SubscribeDto;
import com.hongsam.hongflix.domain.SubscribeUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MybatisSubscribeRepository implements SubscribeRepository{
    private final SubscribeMapper subscribeMapper;

    @Override
    public SubscribeDto save(SubscribeDto subscribeDto) {
        subscribeMapper.save(subscribeDto);
        return subscribeDto;
    }

    @Override
    public void update(Long id, SubscribeUpdateDto updateDto) {
        subscribeMapper.update(id, updateDto);
    }

    @Override
    public Optional<SubscribeDto> findById(Long id) {
        return subscribeMapper.findById(id);
    }
}
