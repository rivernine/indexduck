package com.stocksinsite.core.service;

import java.util.List;
import java.util.Map;

import com.stocksinsite.core.repository.StockRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockService {
  @Autowired
  private StockRepository stockRepository;

  public List<Map<String, Object>> getStock(String ticker, String period){    
    return stockRepository.getStock(ticker, period);
  }

}
