package com.stocksinsite.core.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CorrelRepository {
  List<Map<String, Object>> getCorrels(String market, String offset);
  List<Map<String, Object>> getCorrel(String ticker);
}