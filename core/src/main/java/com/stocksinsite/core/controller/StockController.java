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

  @GetMapping("/getStock")
  public List<Map<String, Object>> getStock(@RequestParam String ticker, @RequestParam(defaultValue="3") String period ) {
    return stockService.getStock(ticker, period);
  }
  
  @GetMapping("/getRankByCap")
  public List<Map<String, Object>> getRankByCap(@RequestParam String start, @RequestParam String end) {
    return stockService.getRankByCap(start, end);
  }
}