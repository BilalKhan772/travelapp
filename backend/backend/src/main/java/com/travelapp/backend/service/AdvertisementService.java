package com.travelapp.backend.service;

import com.cloudinary.Cloudinary;
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

@Service
@RequiredArgsConstructor
public class AdvertisementService {

    private final AdvertisementRepository advertisementRepository;
    private final Cloudinary cloudinary;

    public Advertisement uploadAdvertisement(MultipartFile file, String agencyName, String caption, String whatsappLink) throws IOException {
        Map<?, ?> uploadResult = cloudinary.uploader().upload(file.getBytes(), Map.of());
        String imageUrl = uploadResult.get("secure_url").toString();

        Advertisement ad = new Advertisement(null, imageUrl, agencyName, caption, whatsappLink, new Date());
        return advertisementRepository.save(ad);
    }

    public List<Advertisement> getAllAdvertisements() {
        return advertisementRepository.findAll(Sort.by(Sort.Direction.DESC, "createdAt"));
    }

    public void deleteAdvertisement(String id) {
        advertisementRepository.deleteById(id);
    }
}
