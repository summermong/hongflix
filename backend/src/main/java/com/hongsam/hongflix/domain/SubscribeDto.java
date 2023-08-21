package com.hongsam.hongflix.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SubscribeDto {

    private long id;

    private boolean available;

    private int period;

}
