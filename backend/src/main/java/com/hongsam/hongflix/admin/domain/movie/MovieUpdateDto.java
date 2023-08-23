package com.hongsam.hongflix.admin.domain.movie;

import lombok.Data;

@Data
public class MovieUpdateDto {
    private String accessKey;
    private String title;
    private String subTitle;
    private String content;
    private String genre;

    public MovieUpdateDto(String accessKey, String title, String subTitle, String content, String genre) {
        this.accessKey = accessKey;
        this.title = title;
        this.subTitle = subTitle;
        this.content = content;
        this.genre = genre;
    }
}
