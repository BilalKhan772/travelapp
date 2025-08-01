package com.travelapp.backend.dto.groupfare;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class GroupFareResponse {
    private String id;
    private String imageUrl;
    private String agencyName;
    private String route;
    private String whatsappLink;
    private Date createdAt;
}
