package com.stocksinsite.core.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.stocksinsite.core.dao.GraphDataQueryDAO;
import com.stocksinsite.core.dao.StockInfoQueryDAO;
import com.stocksinsite.core.dto.CorrelRankByVolCumResponseDTO;
import com.stocksinsite.core.entity.VolCumNormGraphData;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RankRepository {
  ArrayList<CorrelRankByVolCumResponseDTO> getCorrelRankByVolCum(StockInfoQueryDAO dao);
  ArrayList<VolCumNormGraphData> getVolCumNormGraphData(GraphDataQueryDAO dao);
  List<Map<String, Object>> getRankByCap(String start, String end);
  List<Map<String, Object>> getRankByCorrel(String investor, String period, String start, String end);
  List<Map<String, Object>> getRankByCorrelRangeCapPer(String investor, String period, String startCorrel, String endCorrel, String startCap, String endCap, String startPer, String endPer);
}
