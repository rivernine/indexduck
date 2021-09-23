package com.stocksinsite.core.controller;

import java.util.List;
import java.util.Map;

import com.stocksinsite.core.service.RankService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RankController {
  @Autowired
  private RankService rankService;
  
  // start, end(순위)
  @GetMapping("/getRankByCap")
  public List<Map<String, Object>> getRankByCap(@RequestParam String start, @RequestParam String end) {
    return rankService.getRankByCap(start, end);
  }

  // investor(투자자)
  //   ind: 개인, for: 외국인, ins: 기관, etc: 기타법인
  // period(기간)
  //   1, 3, 6, 12
  // start, end(순위)
  @GetMapping("/getRankByCorrel")
  public List<Map<String, Object>> getRankByCorrel(@RequestParam String investor, @RequestParam String period, @RequestParam String start, @RequestParam String end) {
    return rankService.getRankByCorrel(investor, period, start, end);
  }
}