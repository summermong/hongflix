package com.hongsam.hongflix.member.domain;

import lombok.Data;

@Data
public class IsLoginResponse {

    private boolean isLogin;

    private LoginUserResponse loginUserResponse;

}
