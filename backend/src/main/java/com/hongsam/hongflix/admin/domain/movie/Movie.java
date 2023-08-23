package com.hongsam.hongflix.admin.domain.movie;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Movie {

    private Long id;

    private String accessKey;
    private String title;
    private String subTitle;
    private String content;
    private String genre;

    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime createdDate;

    public Movie() {
    }

    @Builder
    public Movie(String accessKey, String title, String subTitle, String content, String genre) {
        this.accessKey = accessKey;
        this.title = title;
        this.subTitle = subTitle;
        this.content = content;
        this.genre = genre;
    }
}
