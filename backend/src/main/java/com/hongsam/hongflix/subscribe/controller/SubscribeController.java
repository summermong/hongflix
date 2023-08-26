package com.hongsam.hongflix.subscribe.controller;


import com.hongsam.hongflix.member.domain.LoginUserResponse;
import com.hongsam.hongflix.subscribe.domain.SubscribeDto;
import com.hongsam.hongflix.subscribe.domain.SubscribeUpdateDto;
import com.hongsam.hongflix.subscribe.service.SubscribeService;
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
        saveDto.setAvailable(0);
        saveDto.setPeriod(0);
        // 서비스단 호출
        subscribeService.save(saveDto);
        return "OK";
    }

    @PostMapping
    public String update(@SessionAttribute(required = false) LoginUserResponse loginUserResponse, @RequestBody SubscribeUpdateDto updateDto) {
        subscribeService.update(loginUserResponse.getMemberId(), updateDto);

        loginUserResponse.setAvailable(updateDto.getAvailable());
        loginUserResponse.setPeriod(updateDto.getPeriod());

        return "OK";
    }
}
