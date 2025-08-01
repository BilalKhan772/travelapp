package com.travelapp.backend.dto.groupfare;

import com.travelapp.backend.model.GroupFare;

public class GroupFareDTOMapper {

    public static GroupFareResponse toDto(GroupFare fare) {
        return new GroupFareResponse(
                fare.getId(),
                fare.getImageUrl(),
                fare.getAgencyName(),
                fare.getRoute(),
                fare.getWhatsappLink(),
                fare.getCreatedAt()
        );
    }
}
