package com.travelapp.backend.service;

import com.cloudinary.Cloudinary;
import com.travelapp.backend.model.GroupFare;
import com.travelapp.backend.repository.GroupFareRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
@RequiredArgsConstructor
public class GroupFareService {

    private final GroupFareRepository groupFareRepository;
    private final Cloudinary cloudinary;

    public GroupFare uploadGroupFare(MultipartFile file, String agencyName, String route, String whatsappLink) throws IOException {
        Map<?, ?> uploadResult = cloudinary.uploader().upload(file.getBytes(), Map.of());
        String imageUrl = uploadResult.get("secure_url").toString();

        GroupFare fare = new GroupFare(null, imageUrl, agencyName, route, whatsappLink, new Date());
        return groupFareRepository.save(fare);
    }

    public List<GroupFare> getAllFares() {
        return groupFareRepository.findAll(Sort.by(Sort.Direction.DESC, "createdAt"));
    }

    public List<GroupFare> getFaresByRoute(String route) {
        return groupFareRepository.findByRoute(route);
    }

    public void deleteGroupFare(String id) {
        groupFareRepository.deleteById(id);
    }
}
