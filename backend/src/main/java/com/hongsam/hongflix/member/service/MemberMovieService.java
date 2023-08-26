package com.hongsam.hongflix.member.service;

import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberMovieService {

    private final MemberRepository memberRepository;

    public void userMovieWatch(Long memberId, Long movieId) {
        memberRepository.userMovieWatch(memberId, movieId);
    }

    public List<Movie> findLatestWatchMovies(Long memberId) {
        return memberRepository.findLatestWatchMovies(memberId);
    }

}
