package com.stocksinsite.core.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface StockRepository {  
  List<Map<String, Object>> getStock(String ticker, String period);
  List<Map<String, Object>> getStockRangeCap(String market, String period, String start, String end);
  List<Map<String, Object>> getStockRangeCapPer(String market, String period, String startCap, String endCap, String startPer, String endPer);
}
