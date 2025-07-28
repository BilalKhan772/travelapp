package com.travelapp.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "group_fares")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GroupFare {
    @Id
    private String id;

    private String imageUrl;
    private String agencyName;
    private String route;
    private String whatsappLink;

    private Date createdAt = new Date();
}
