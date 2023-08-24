package com.hongsam.hongflix.admin.domain.content;

import lombok.Data;

@Data
public class ContentUpdateReqDto {
    private String title;
    private String explanation;
    private String videoName;
    private String accessUrl;

    public ContentUpdateReqDto(String title, String explanation, String videoName, String accessUrl) {
        this.title = title;
        this.explanation = explanation;
        this.videoName = videoName;
        this.accessUrl = accessUrl;
    }
}
