package com.travelapp.backend.repository;

import com.travelapp.backend.model.GroupFare;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroupFareRepository extends MongoRepository<GroupFare, String> {
    List<GroupFare> findByRoute(String route);
}
