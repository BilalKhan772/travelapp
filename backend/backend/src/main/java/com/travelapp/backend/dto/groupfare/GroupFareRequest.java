package com.travelapp.backend.dto.groupfare;

import lombok.Data;

@Data
public class GroupFareRequest {
    private String agencyName;
    private String route;
    private String whatsappLink;
    // No need for image file here since you're uploading with Multipart separately
}
