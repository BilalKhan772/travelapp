package com.travelapp.backend.dto.news;

import lombok.Data;

@Data
public class NewsRequest {
    private String title;
    private String sourceUrl;
}
