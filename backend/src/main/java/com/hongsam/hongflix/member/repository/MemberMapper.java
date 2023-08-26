package com.hongsam.hongflix.member.repository;

import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.member.domain.LoginAdminResponse;
import com.hongsam.hongflix.member.domain.LoginUserResponse;
import com.hongsam.hongflix.member.domain.Member;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface MemberMapper {

    void userSignup(Member member);

    void userSignupSubscribe(Member member);

    void adminSignup(Member member);

    String findPasswordByEmail(String password);

    LoginUserResponse findUserByEmail(String email);

    LoginAdminResponse findAdminByEmail(String email);

    void userMovieWatch(@Param("memberId") Long memberId, @Param("movieId") Long movieId);

    List<Movie> findLatestWatchMovies(Long memberId);

}
