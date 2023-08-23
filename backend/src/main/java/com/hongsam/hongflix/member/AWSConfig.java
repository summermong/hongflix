package com.hongsam.hongflix.member;

import lombok.Getter;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;


@Getter
@Configuration
public class AWSConfig {

    @Value("${aws.accessKey}")
    private String awsAccessKey;

    @Value("${aws.secretKey}")
    private String awsSecretKey;

    private String awsRegion = "ap-northeast-1";
}
