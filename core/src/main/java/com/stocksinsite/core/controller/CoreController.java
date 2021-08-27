package com.stocksinsite.core.controller;

import com.stocksinsite.core.service.CoreService;

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

}
