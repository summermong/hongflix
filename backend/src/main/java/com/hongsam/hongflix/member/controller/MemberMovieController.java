package com.hongsam.hongflix.member.controller;

import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.member.domain.LoginUserResponse;
import com.hongsam.hongflix.member.service.MemberMovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/contents")
public class MemberMovieController {

    private final MemberMovieService memberMovieService;

    @GetMapping("/latest")
    public List<Movie> findLatestWatchMovies(@SessionAttribute(value = "loginMember", required = false) LoginUserResponse loginUserResponse) throws Exception {

//        if (loginUserResponse.getAvailable() == 0) {
//            throw new Exception("구독 안 한 사용자입니다.");
//        } else {
//            return memberMovieService.findLatestWatchMovies(loginUserResponse.getMemberId());
//        }
        return memberMovieService.findLatestWatchMovies(loginUserResponse.getMemberId());
    }
}
