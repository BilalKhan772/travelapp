package com.travelapp.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "advertisements")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Advertisement {
    @Id
    private String id;

    private String imageUrl;
    private String agencyName;
    private String caption;
    private String whatsappLink;

    private Date createdAt = new Date();
}
