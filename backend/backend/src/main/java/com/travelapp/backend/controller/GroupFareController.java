package com.travelapp.backend.controller;

import com.travelapp.backend.dto.groupfare.GroupFareRequest;
import com.travelapp.backend.dto.groupfare.GroupFareResponse;
import com.travelapp.backend.service.GroupFareService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/group-fare")
@RequiredArgsConstructor
public class GroupFareController {

    private final GroupFareService groupFareService;

    @PostMapping("/upload")
    public ResponseEntity<GroupFareResponse> uploadFare(
            @RequestParam("file") MultipartFile file,
            @RequestParam("agencyName") String agencyName,
            @RequestParam("route") String route,
            @RequestParam("whatsappLink") String whatsappLink
    ) throws IOException {
        GroupFareRequest request = new GroupFareRequest();
        request.setAgencyName(agencyName);
        request.setRoute(route);
        request.setWhatsappLink(whatsappLink);

        GroupFareResponse response = groupFareService.uploadGroupFare(file, request);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<GroupFareResponse>> getAllFares() {
        return ResponseEntity.ok(groupFareService.getAllFares());
    }

    @GetMapping("/filter")
    public ResponseEntity<List<GroupFareResponse>> filterByRoute(@RequestParam String route) {
        return ResponseEntity.ok(groupFareService.getFaresByRoute(route));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFare(@PathVariable String id) {
        groupFareService.deleteGroupFare(id);
        return ResponseEntity.ok().build();
    }
}
