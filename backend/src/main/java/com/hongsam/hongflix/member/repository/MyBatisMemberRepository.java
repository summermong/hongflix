package com.hongsam.hongflix.member.repository;

import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.member.domain.LoginAdminResponse;
import com.hongsam.hongflix.member.domain.LoginUserResponse;
import com.hongsam.hongflix.member.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MyBatisMemberRepository implements MemberRepository{

    private final MemberMapper memberMapper;

    @Override
    public Member userSignup(Member member) {
        memberMapper.userSignup(member);
        memberMapper.userSignupSubscribe(member);

        return member;
    }

    @Override
    public Member adminSignup(Member member) {
        memberMapper.adminSignup(member);
        return member;
    }

    @Override
    public String findPasswordByEmail(String password) {
        return memberMapper.findPasswordByEmail(password);
    }

    @Override
    public LoginUserResponse findUserByEmail(String email) {
        return memberMapper.findUserByEmail(email);
    }

    @Override
    public LoginAdminResponse findAdminByEmail(String email) {
        return memberMapper.findAdminByEmail(email);
    }

    @Override
    public void userMovieWatch(Long memberId, Long movieId) {
        memberMapper.userMovieWatch(memberId,movieId);
    }

    @Override
    public List<Movie> findLatestWatchMovies(Long memberId) {
        return memberMapper.findLatestWatchMovies(memberId);
    }
}
