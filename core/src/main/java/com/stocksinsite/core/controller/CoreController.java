package com.stocksinsite.core.controller;

import com.stocksinsite.core.controller.dto.TextMessageDTO;
import com.stocksinsite.core.service.CoreService;

import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class CoreController {
  
  private final CoreService coreService;

  @GetMapping("/hello")
  public String hello(){
    return coreService.print_hello();
  }

  @SendTo("/topic/message")
	public TextMessageDTO broadcastMessage(@Payload TextMessageDTO textMessageDTO) {
		return textMessageDTO;
	}
}
