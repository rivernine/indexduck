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

  // 시가총액 start~end등의 기업들의 정보를 조회한다.
  // 
  // -- Request
  // market(시장)
  //   KOSPI(DEFAULT), KOSDAQ
  // period(기간)
  //   1, 3, 6, 12
  // start, end(시가총액 순위)
  // 
  // -- Response
  // 기간 | 종가 | 개인순매수거래량 | 기관순매수거래량 | 외국인순매수거래량 | 기타법인순매수거래량
  @GetMapping("/getStockOrderByCap")
  public List<Map<String, Object>> getStockOrderByCap(@RequestParam(defaultValue="KOSPI") String market, @RequestParam String period, @RequestParam String start, @RequestParam String end){
    return stockService.getStockOrderByCap(market, period, start, end);
  }
}