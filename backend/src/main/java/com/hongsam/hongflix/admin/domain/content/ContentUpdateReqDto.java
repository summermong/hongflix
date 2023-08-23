package com.hongsam.hongflix.admin.domain.content;

import lombok.Data;

@Data
public class ContentUpdateReqDto {
    private String movieTitle;
    private String contentTitle;
    private String explanation;
    private String videoName;

    public ContentUpdateReqDto(String movieTitle, String contentTitle, String explanation, String videoName) {
        this.movieTitle = movieTitle;
        this.contentTitle = contentTitle;
        this.explanation = explanation;
        this.videoName = videoName;
    }
}
