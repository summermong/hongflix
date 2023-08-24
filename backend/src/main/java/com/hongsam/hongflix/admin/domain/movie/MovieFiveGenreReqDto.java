package com.hongsam.hongflix.admin.domain.movie;

import lombok.Data;

@Data
public class MovieFiveGenreReqDto {
    private String genre_first_name;
    private String genre_second_name;
    private String genre_third_name;
    private String genre_four_name;
    private String genre_five_name;
}
