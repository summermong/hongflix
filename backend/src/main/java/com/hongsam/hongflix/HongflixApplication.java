package com.hongsam.hongflix;

import com.hongsam.hongflix.config.MyBatisConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import({MyBatisConfig.class})
public class HongflixApplication {

    public static void main(String[] args) {
        SpringApplication.run(HongflixApplication.class, args);
    }

}
