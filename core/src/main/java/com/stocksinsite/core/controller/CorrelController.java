package com.stocksinsite.core.controller;

import java.util.List;
import java.util.Map;

import com.stocksinsite.core.service.CorrelService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CorrelController {
  
  @Autowired
  private CorrelService correlService;

  @GetMapping("/getCorrels")
  public List<Map<String, Object>> getCorrels(@RequestParam String market, @RequestParam(defaultValue="0") String offset ) {
    return correlService.getCorrels(market, offset);
  }
  
  @GetMapping("/getCorrel")
  public Map<String, Object> getCorrel(@RequestParam String ticker){
    return correlService.getCorrel(ticker);
  }
  
  // @SendTo("/topic/message")
	// public TextMessageDTO broadcastMessage(@Payload TextMessageDTO textMessageDTO) {
	// 	return textMessageDTO;
	// }
}
