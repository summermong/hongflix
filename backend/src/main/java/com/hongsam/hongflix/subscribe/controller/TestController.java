package com.hongsam.hongflix.subscribe.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Arrays;

@RestController
@Slf4j
public class TestController {


    @GetMapping("/test")
    public String test1(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.setAttribute("loginMember", "leedongwoo");

        return "OK";
    }

    @GetMapping("/get")
    public String test2(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            String name = cookie.getName();
            String value = cookie.getValue();
            log.info(name);
            log.info(value);
        }

        return "OK";
    }

    @PostMapping("/post")
    public String test3(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        log.info(Arrays.toString(cookies));
        return "OK";
    }
    /////
}
