package com.hongsam.hongflix.member;

import lombok.Getter;
import org.springframework.context.annotation.Configuration;

@Getter
@Configuration
public class AWSConfig {

    private String awsAccessKey = "AKIAZ75G5IVSM2HVOHMJ";

    private String awsSecretKey = "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";

    private String awsRegion = "ap-northeast-1";
}
