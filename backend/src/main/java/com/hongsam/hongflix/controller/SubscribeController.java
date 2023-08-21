package com.hongsam.hongflix.controller;


import com.hongsam.hongflix.domain.SubscribeDto;
import com.hongsam.hongflix.domain.SubscribeUpdateDto;
import com.hongsam.hongflix.service.SubscribeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/subscribe")
@RequiredArgsConstructor
public class SubscribeController {

    private final SubscribeService subscribeService;

    @GetMapping("/{memberId}")
    public String save(@PathVariable Long memberId) {
        SubscribeDto saveDto = new SubscribeDto();
        saveDto.setId(memberId);
        saveDto.setAvailable(false);
        saveDto.setPeriod(0);
        // 서비스단 호출
        subscribeService.save(saveDto);
        return "OK";
    }

    @PostMapping("/{memberId}")
    public String update(@PathVariable Long memberId, @RequestBody SubscribeUpdateDto updateDto) {
        subscribeService.update(memberId, updateDto);
        return "OK";
    }
}
