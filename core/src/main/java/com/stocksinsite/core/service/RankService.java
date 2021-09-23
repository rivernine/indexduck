package com.stocksinsite.core.service;

import java.util.List;
import java.util.Map;

import com.stocksinsite.core.repository.RankRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RankService {
  @Autowired
  private RankRepository rankRepository;

  public List<Map<String, Object>> getRankByCap(String start, String end){    
    return rankRepository.getRankByCap(start, end);
  }

  public List<Map<String, Object>> getRankByCorrel(String investor, String period, String start, String end){    
    return rankRepository.getRankByCorrel(investor, period, start, end);
  }
}
