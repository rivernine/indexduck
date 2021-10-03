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

  public List<Map<String, Object>> getStockList(){
    return stockRepository.getStockList();
  }

  public List<Map<String, Object>> getStockRangeCap(String market, String period, String start, String end) {
    return stockRepository.getStockRangeCap(market, period, start, end);
  }

  public List<Map<String, Object>> getStockRangeCapPer(String market, String period, String startCap, String endCap, String startPer, String endPer) {
    return stockRepository.getStockRangeCapPer(market, period, startCap, endCap, startPer, endPer);
  };
}
