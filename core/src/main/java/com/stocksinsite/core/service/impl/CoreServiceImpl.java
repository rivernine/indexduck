package com.stocksinsite.core.service.impl;

import java.util.List;
import java.util.Map;

import com.stocksinsite.core.repository.CorrelRepository;
import com.stocksinsite.core.service.CoreService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CoreServiceImpl implements CoreService{

  @Autowired
  private CorrelRepository correlRepository;

  @Override
  public String print_hello(){
    return "hello";
  }  

  @Override
  public List<Map<String, Object>> getCorrels(){    
    return correlRepository.getCorrels();
  }

  @Override
  public List<Map<String, Object>> getCorrel(String ticker){    
    return correlRepository.getCorrel(ticker);
  }
}
