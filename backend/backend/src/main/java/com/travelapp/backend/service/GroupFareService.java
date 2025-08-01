package com.travelapp.backend.service;

import com.cloudinary.Cloudinary;
import com.travelapp.backend.dto.groupfare.GroupFareDTOMapper;
import com.travelapp.backend.dto.groupfare.GroupFareRequest;
import com.travelapp.backend.dto.groupfare.GroupFareResponse;
import com.travelapp.backend.model.GroupFare;
import com.travelapp.backend.repository.GroupFareRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class GroupFareService {

    private final GroupFareRepository groupFareRepository;
    private final Cloudinary cloudinary;

    public GroupFareResponse uploadGroupFare(MultipartFile file, GroupFareRequest request) throws IOException {
        Map<?, ?> uploadResult = cloudinary.uploader().upload(file.getBytes(), Map.of());
        String imageUrl = uploadResult.get("secure_url").toString();

        GroupFare fare = new GroupFare(null, imageUrl, request.getAgencyName(), request.getRoute(), request.getWhatsappLink(), new Date());
        return GroupFareDTOMapper.toDto(groupFareRepository.save(fare));
    }

    public List<GroupFareResponse> getAllFares() {
        return groupFareRepository.findAll(Sort.by(Sort.Direction.DESC, "createdAt"))
                .stream()
                .map(GroupFareDTOMapper::toDto)
                .collect(Collectors.toList());
    }

    public List<GroupFareResponse> getFaresByRoute(String route) {
        return groupFareRepository.findByRoute(route)
                .stream()
                .map(GroupFareDTOMapper::toDto)
                .collect(Collectors.toList());
    }

    public void deleteGroupFare(String id) {
        groupFareRepository.deleteById(id);
    }
}
