package com.stocksinsite.core.controller;

import java.util.List;
import java.util.Map;

import com.stocksinsite.core.service.StockService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StockController {
  @Autowired
  private StockService stockService;

  // ticker(티커)
  // period(기간)
  //   1, 3(DEFAULT), 6, 12
  @GetMapping("/getStock")
  public List<Map<String, Object>> getStock(@RequestParam String ticker, @RequestParam(defaultValue="3") String period ) {
    return stockService.getStock(ticker, period);
  }

  // 모든 기업들의 티커, 이름, 마켓을 조회한다.
  // 
  // -- Response
  // 티커 | 이름 | 마켓
  @GetMapping("/getStockList")
  public List<Map<String, Object>> getStockList(){
    return stockService.getStockList();
  }

  // 시가총액의 지정순위에 속하는 기업들을 조회한다.
  // 
  // -- Request
  // - market(시장)
  //   - KOSPI(DEFAULT), KOSDAQ
  // - period(기간)
  //   - 1, 3, 6, 12
  // - start, end(시가총액 순위)
  // 
  // -- Response
  // 기간 | 종가 | 개인순매수거래량 | 기관순매수거래량 | 외국인순매수거래량 | 기타법인순매수거래량
  @GetMapping("/getStockRangeCap")
  public List<Map<String, Object>> getStockRangeCap(@RequestParam(defaultValue="KOSPI") String market, 
                                                    @RequestParam String period, 
                                                    @RequestParam String start, 
                                                    @RequestParam String end){
    return stockService.getStockRangeCap(market, period, start, end);
  }

  // 시가총액과 PER의 지정범위에 속하는 기업들을 조회한다.
  // 
  // -- Request
  // - market(시장)
  //   - KOSPI(DEFAULT), KOSDAQ
  // - period(기간)
  //   - 1, 3, 6, 12
  // - startCap, endCap(시가총액 범위)
  // - startPer, endPer(Per 범위)
  // 
  // -- Response
  // 기간 | 종가 | 개인순매수거래량 | 기관순매수거래량 | 외국인순매수거래량 | 기타법인순매수거래량
  @GetMapping("/getStockRangeCapPer")
  public List<Map<String, Object>> getStockRangeCapPer( @RequestParam(defaultValue="KOSPI") String market, 
                                                        @RequestParam String period, 
                                                        @RequestParam String startCap, 
                                                        @RequestParam String endCap, 
                                                        @RequestParam String startPer, 
                                                        @RequestParam String endPer){
    return stockService.getStockRangeCapPer(market, period, startCap, endCap, startPer, endPer);
  }
}