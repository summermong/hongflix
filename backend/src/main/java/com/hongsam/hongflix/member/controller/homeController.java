package com.hongsam.hongflix.member.controller;

import com.hongsam.hongflix.member.domain.IsLoginResponse;
import com.hongsam.hongflix.member.domain.LoginUserResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequiredArgsConstructor
@Slf4j
public class homeController {

    @GetMapping("/api/home")
    public IsLoginResponse home(HttpServletRequest request, @SessionAttribute(required = false) LoginUserResponse loginUserResponse)  {
        String requestURI = request.getRequestURI();
        log.info("인증 체크 실행 {}", requestURI);

        IsLoginResponse isLoginResponse = new IsLoginResponse();
        if (loginUserResponse == null) {
            log.info("미인증 사용자 접근");
            isLoginResponse.setLogin(false);
            isLoginResponse.setLoginUserResponse(null);
            return isLoginResponse;
        }
        log.info("인증 성공");
        isLoginResponse.setLogin(true);
        isLoginResponse.setLoginUserResponse(loginUserResponse);
        return isLoginResponse;
    }


}
