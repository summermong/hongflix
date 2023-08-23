package com.hongsam.hongflix.controller;

import com.hongsam.hongflix.service.S3Service;
import com.hongsam.hongflix.service.SubscribeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@Slf4j
public class S3Controller {

    private final S3Service s3Service;
    private final SubscribeService subscribeService;

    @PostMapping("/s3/upload")
    public String upload(MultipartFile file) throws IOException {
        String url = s3Service.saveFile(file);
        log.info("생성된 url = {}", url);

        String filename = file.getOriginalFilename();
        String videoURL = "https://d2hpuoq6hnp8cm.cloudfront.net/output/" + filename
                + "/Default/HLS/" + filename + ".m3u8";
        String imgURL = "https://d2hpuoq6hnp8cm.cloudfront.net/output/" + filename
                + "/Default/Thumbnails/" + filename + ".jpg";
        return "ok";
    }

}
