package com.stocksinsite.core.controller;

import java.util.List;
import java.util.Map;

import com.stocksinsite.core.controller.dto.TextMessageDTO;
import com.stocksinsite.core.service.CoreService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoreController {
  
  @Autowired
  private CoreService coreService;

  @GetMapping("/hello")
  public String hello(){
    return coreService.print_hello();
  }

  @GetMapping("/getCorrels")
  public List<Map<String, Object>> getCorrels(@RequestParam String market, @RequestParam(defaultValue="0") String offset ) {

    return coreService.getCorrels(market, offset);

  }
  
  @GetMapping("/getCorrel")
  public Map<String, Object> getCorrel(@RequestParam String ticker){
    return coreService.getCorrel(ticker);
  }
  
  @SendTo("/topic/message")
	public TextMessageDTO broadcastMessage(@Payload TextMessageDTO textMessageDTO) {
		return textMessageDTO;
	}
}
