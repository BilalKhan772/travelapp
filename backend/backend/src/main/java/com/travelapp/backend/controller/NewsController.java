package com.travelapp.backend.controller;

import com.travelapp.backend.dto.news.NewsRequest;
import com.travelapp.backend.dto.news.NewsResponse;
import com.travelapp.backend.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
@RequiredArgsConstructor
public class NewsController {

    private final NewsService newsService;

    @PostMapping("/add")
    public ResponseEntity<NewsResponse> addNews(@RequestBody NewsRequest request) {
        return ResponseEntity.ok(newsService.addNews(request));
    }

    @GetMapping
    public ResponseEntity<List<NewsResponse>> getAllNews() {
        return ResponseEntity.ok(newsService.getAllNews());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNews(@PathVariable String id) {
        newsService.deleteNews(id);
        return ResponseEntity.ok().build();
    }
}
