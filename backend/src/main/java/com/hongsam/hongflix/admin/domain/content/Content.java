package com.hongsam.hongflix.admin.domain.content;

import lombok.Builder;
import lombok.Data;

@Data
public class Content {

    private Long id;
    private Long movieId;

    private String title;
    private String explanation;
    private String accessUrl;

    public Content() {
    }

    @Builder
    public Content(String title, String explanation, String accessUrl) {
        this.title = title;
        this.explanation = explanation;
        this.accessUrl = accessUrl;
    }
}
