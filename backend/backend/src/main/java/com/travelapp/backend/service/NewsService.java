package com.travelapp.backend.service;

import com.travelapp.backend.dto.news.NewsRequest;
import com.travelapp.backend.dto.news.NewsResponse;
import com.travelapp.backend.model.News;
import com.travelapp.backend.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NewsService {

    private final NewsRepository newsRepository;

    public NewsResponse addNews(NewsRequest request) {
        News news = new News(null, request.getTitle(), request.getSourceUrl(), new Date());
        News saved = newsRepository.save(news);
        return new NewsResponse(saved.getId(), saved.getTitle(), saved.getSourceUrl(), saved.getCreatedAt());
    }

    public List<NewsResponse> getAllNews() {
        return newsRepository.findAll(Sort.by(Sort.Direction.DESC, "createdAt"))
                .stream()
                .map(news -> new NewsResponse(news.getId(), news.getTitle(), news.getSourceUrl(), news.getCreatedAt()))
                .collect(Collectors.toList());
    }

    public void deleteNews(String id) {
        newsRepository.deleteById(id);
    }
}
