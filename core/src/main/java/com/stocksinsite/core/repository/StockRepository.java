package com.stocksinsite.core.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface StockRepository {  
  List<Map<String, Object>> getStock(String ticker, String period);
  List<Map<String, Object>> getRankByCap(String start, String end);
}
