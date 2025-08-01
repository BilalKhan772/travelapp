package com.travelapp.backend.dto.advertisement;

import com.travelapp.backend.dto.advertisement.AdvertisementResponse;
import com.travelapp.backend.model.Advertisement;
import org.springframework.stereotype.Component;

@Component
public class AdvertisementDTOMapper {
    public AdvertisementResponse toResponse(Advertisement ad) {
        AdvertisementResponse response = new AdvertisementResponse();
        response.setId(ad.getId());
        response.setImageUrl(ad.getImageUrl());
        response.setAgencyName(ad.getAgencyName());
        response.setCaption(ad.getCaption());
        response.setWhatsappLink(ad.getWhatsappLink());
        response.setCreatedAt(ad.getCreatedAt());
        return response;
    }
}
