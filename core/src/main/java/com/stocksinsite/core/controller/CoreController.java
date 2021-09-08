package com.stocksinsite.core.controller;

import java.util.List;
import java.util.Map;

import com.stocksinsite.core.controller.dto.TextMessageDTO;
import com.stocksinsite.core.service.CoreService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.GetMapping;
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
  public List<Map<String, Object>> getCorrels(){
    return coreService.getCorrels();
  }
  
  @GetMapping("/getCorrel")
  public List<Map<String, Object>> getCorrel(@RequestParam String ticker){
    return coreService.getCorrel(ticker);
  }
  
  @SendTo("/topic/message")
	public TextMessageDTO broadcastMessage(@Payload TextMessageDTO textMessageDTO) {
		return textMessageDTO;
	}
}
