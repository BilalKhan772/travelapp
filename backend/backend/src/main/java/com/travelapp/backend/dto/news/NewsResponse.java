package com.travelapp.backend.dto.news;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class NewsResponse {
    private String id;
    private String title;
    private String sourceUrl;
    private Date createdAt;
}
