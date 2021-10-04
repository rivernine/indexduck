package com.stocksinsite.core.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.google.gson.Gson;
import com.stocksinsite.core.dao.GraphDataQueryDAO;
import com.stocksinsite.core.dto.CorrelRankByVolCumRequestDTO;
import com.stocksinsite.core.dto.CorrelRankByVolCumResponseDTO;
import com.stocksinsite.core.entity.VolCumNormGraphData;
import com.stocksinsite.core.repository.RankRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RankService {

  @Autowired
  private RankRepository rankRepository;

  @Autowired
  private Gson gson;

  private static Logger LOGGER = LoggerFactory.getLogger(RankService.class);

  public ArrayList<CorrelRankByVolCumResponseDTO> CorrelRankByVolCum(CorrelRankByVolCumRequestDTO dto) {

    // 조건에 맞는 티커들 상관계수 랭킹으로 조회
    ArrayList<CorrelRankByVolCumResponseDTO> result = rankRepository.getCorrelRankByVolCum(dto.toStockInfoQueryDAO());

    // 조회된 티커에 대한 정규화 그래프 정보 조회
    List<String> tickers = result.stream().map(s->s.getTicker()).collect(Collectors.toList());    
    GraphDataQueryDAO queryDao = new GraphDataQueryDAO(dto.getPeriod(), tickers);
    ArrayList<VolCumNormGraphData> graphData = rankRepository.getVolCumNormGraphData(queryDao);

    // 각 티커에 그래프 데이터 추가
    for (VolCumNormGraphData data : graphData) {
      for (CorrelRankByVolCumResponseDTO dtoElement : result) {
        if (data.getTicker().equals(dtoElement.getTicker())) {
          dtoElement.getGraphData().add(data);
          break;
        }
      }
    }
    // LOGGER.info(gson.toJson(result));

    return result;
  }

  public List<Map<String, Object>> getRankByCap(String start, String end){    
    return rankRepository.getRankByCap(start, end);
  }

  public List<Map<String, Object>> getRankByCorrel(String investor, String period, String start, String end){    
    return rankRepository.getRankByCorrel(investor, period, start, end);
  }

  public List<Map<String, Object>> getRankByCorrelRangeCapPer(String investor, String period, String startCorrel, String endCorrel, String startCap, String endCap, String startPer, String endPer) {
    return rankRepository.getRankByCorrelRangeCapPer(investor, period, startCorrel, endCorrel, startCap, endCap, startPer, endPer);
  }
}
