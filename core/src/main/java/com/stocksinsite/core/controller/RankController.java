package com.stocksinsite.core.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.stocksinsite.core.dto.CorrelRankByVolCumRequestDTO;
import com.stocksinsite.core.dto.CorrelRankByVolCumResponseDTO;
import com.stocksinsite.core.service.RankService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @RequestMapping("/rnk")
public class RankController {
  
  @Autowired
  private RankService rankService;
  
  private static Logger LOGGER = LoggerFactory.getLogger(RankController.class);

  @GetMapping("/correlRank")
  public ArrayList<CorrelRankByVolCumResponseDTO> CorrelRankByVolCum(HttpServletRequest request, CorrelRankByVolCumRequestDTO dto) {
    LOGGER.info("api request: " + request.getRequestURI());
    return rankService.CorrelRankByVolCum(dto);
  }

  // start, end(순위)
  @GetMapping("/getRankByCap")
  public List<Map<String, Object>> getRankByCap(@RequestParam String start, @RequestParam String end) {
    return rankService.getRankByCap(start, end);
  }

  // 투자자별 상관계수의 지정순위에 해당하는 기업을 조회한다.
  // 
  // -- Request
  // - investor(투자자)
  //   - ind: 개인, for: 외국인, ins: 기관, etc: 기타법인
  // - period(기간)
  //   - 1, 3, 6, 12
  // - start, end(상관계수순위)
  // 
  // -- Response
  // 
  @GetMapping("/getRankByCorrel")
  public List<Map<String, Object>> getRankByCorrel( @RequestParam String investor, 
                                                    @RequestParam String period, 
                                                    @RequestParam String start, 
                                                    @RequestParam String end) {
    return rankService.getRankByCorrel(investor, period, start, end);
  }

  // 투자자별 상관계수의 지정순위와 시가총액, PER의 지정범위에 해당하는 기업을 조회한다.
  // 
  // -- Request
  // - investor(투자자)
  //   - ind: 개인, for: 외국인, ins: 기관, etc: 기타법인
  // - period(기간)
  //   - 1, 3, 6, 12
  // - startCorrel, endCorrel(상관계수순위)
  // - startCap, endCap(시가총액범위)
  // - startPer, endPer(PER범위)
  // 
  // -- Response
  // 
  @GetMapping("/getRankByCorrelRangeCapPer")
  public List<Map<String, Object>> getRankByCorrelRangeCapPer(@RequestParam String investor, 
                                                              @RequestParam String period, 
                                                              @RequestParam String startCorrel, 
                                                              @RequestParam String endCorrel, 
                                                              @RequestParam String startCap, 
                                                              @RequestParam String endCap, 
                                                              @RequestParam String startPer, 
                                                              @RequestParam String endPer) {
    return rankService.getRankByCorrelRangeCapPer(investor, period, startCorrel, endCorrel, startCap, endCap, startPer, endPer);
  }
}