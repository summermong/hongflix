package com.hongsam.hongflix.admin.domain;

import lombok.Data;

@Data
public class Content {

    private Long id;
    private Long movieId;

    private String title;
    private String explanation;

    public Content() {
    }

    public Content(Long id, String title, String explanation) {
        this.id = id;
        this.title = title;
        this.explanation = explanation;
    }
}
