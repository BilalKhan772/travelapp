package com.travelapp.backend.service;

import com.cloudinary.Cloudinary;
import com.travelapp.backend.dto.advertisement.AdvertisementRequest;
import com.travelapp.backend.dto.advertisement.AdvertisementResponse;
import com.travelapp.backend.dto.advertisement.AdvertisementDTOMapper;
import com.travelapp.backend.model.Advertisement;
import com.travelapp.backend.repository.AdvertisementRepository;
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
public class AdvertisementService {

    private final AdvertisementRepository advertisementRepository;
    private final Cloudinary cloudinary;
    private final AdvertisementDTOMapper advertisementDTOMapper;

    public AdvertisementResponse uploadAdvertisement(MultipartFile file, AdvertisementRequest request) throws IOException {
        Map<?, ?> uploadResult = cloudinary.uploader().upload(file.getBytes(), Map.of());
        String imageUrl = uploadResult.get("secure_url").toString();

        Advertisement ad = new Advertisement(
                null,
                imageUrl,
                request.getAgencyName(),
                request.getCaption(),
                request.getWhatsappLink(),
                new Date()
        );

        Advertisement saved = advertisementRepository.save(ad);
        return advertisementDTOMapper.toResponse(saved);
    }

    public List<AdvertisementResponse> getAllAdvertisements() {
        return advertisementRepository
                .findAll(Sort.by(Sort.Direction.DESC, "createdAt"))
                .stream()
                .map(advertisementDTOMapper::toResponse)
                .collect(Collectors.toList());
    }

    public void deleteAdvertisement(String id) {
        advertisementRepository.deleteById(id);
    }
}
