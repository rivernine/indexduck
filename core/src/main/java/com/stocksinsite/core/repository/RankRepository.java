package com.stocksinsite.core.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RankRepository {  
  List<Map<String, Object>> getRankByCap(String start, String end);
  List<Map<String, Object>> getRankByCorrel(String investor, String period, String start, String end);
  List<Map<String, Object>> getRankByCorrelRangeCapPer(String investor, String period, String startCorrel, String endCorrel, String startCap, String endCap, String startPer, String endPer);
}
