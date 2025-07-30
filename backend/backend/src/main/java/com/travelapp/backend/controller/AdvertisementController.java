package com.travelapp.backend.controller;

import com.travelapp.backend.model.Advertisement;
import com.travelapp.backend.service.AdvertisementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/advertisements")
@RequiredArgsConstructor
public class AdvertisementController {

    private final AdvertisementService advertisementService;

    @PostMapping("/upload")
    public ResponseEntity<Advertisement> uploadAd(
            @RequestParam("file") MultipartFile file,
            @RequestParam("agencyName") String agencyName,
            @RequestParam("caption") String caption,
            @RequestParam("whatsappLink") String whatsappLink
    ) throws IOException {
        Advertisement ad = advertisementService.uploadAdvertisement(file, agencyName, caption, whatsappLink);
        return ResponseEntity.ok(ad);
    }

    @GetMapping
    public ResponseEntity<List<Advertisement>> getAllAds() {
        return ResponseEntity.ok(advertisementService.getAllAdvertisements());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAd(@PathVariable String id) {
        advertisementService.deleteAdvertisement(id);
        return ResponseEntity.ok().build();
    }
}
