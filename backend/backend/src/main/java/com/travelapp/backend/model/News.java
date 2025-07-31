package com.travelapp.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "news")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class News {
    @Id
    private String id;

    private String title;
    private String sourceUrl;

    private Date createdAt = new Date();
}
