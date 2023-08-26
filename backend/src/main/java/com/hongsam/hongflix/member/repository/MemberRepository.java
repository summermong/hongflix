package com.hongsam.hongflix.member.repository;

import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.member.domain.LoginAdminResponse;
import com.hongsam.hongflix.member.domain.LoginUserResponse;
import com.hongsam.hongflix.member.domain.Member;

import java.util.List;

public interface MemberRepository {

    Member userSignup(Member member);

    Member adminSignup(Member member);

    String findPasswordByEmail(String password);

    LoginUserResponse findUserByEmail(String email);

    LoginAdminResponse findAdminByEmail(String email);

    void userMovieWatch(Long memberId, Long movieId);

    List<Movie> findLatestWatchMovies(Long memberId);

}
