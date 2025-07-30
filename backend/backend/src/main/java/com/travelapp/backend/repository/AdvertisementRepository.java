package com.travelapp.backend.repository;

import com.travelapp.backend.model.Advertisement;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdvertisementRepository extends MongoRepository<Advertisement, String> {
    // No filtering required
}
