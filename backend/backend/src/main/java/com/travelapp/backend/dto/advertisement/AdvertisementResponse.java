package com.travelapp.backend.dto.advertisement;

import lombok.Data;

import java.util.Date;

@Data
public class AdvertisementResponse {
    private String id;
    private String imageUrl;
    private String agencyName;
    private String caption;
    private String whatsappLink;
    private Date createdAt;
}
