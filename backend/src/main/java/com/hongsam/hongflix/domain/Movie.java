package com.hongsam.hongflix.domain;

import lombok.Data;

@Data
public class Movie {

    private Long id;

    private String accessKey;
    private String title;
    private String subTitle;
    private String content;
    private String genre;

    public Movie() {
    }


    public Movie(String accessKey, String title, String subTitle, String content, String genre) {
        this.accessKey = accessKey;
        this.title = title;
        this.subTitle = subTitle;
        this.content = content;
        this.genre = genre;
    }
}
