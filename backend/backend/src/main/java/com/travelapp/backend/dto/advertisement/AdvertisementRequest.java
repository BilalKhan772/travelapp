package com.travelapp.backend.dto.advertisement;

import lombok.Data;

@Data
public class AdvertisementRequest {
    private String agencyName;
    private String caption;
    private String whatsappLink;
}
