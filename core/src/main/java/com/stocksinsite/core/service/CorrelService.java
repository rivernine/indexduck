package com.stocksinsite.core.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.stocksinsite.core.repository.CorrelRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CorrelService{

  @Autowired
  private CorrelRepository correlRepository;

  public List<Map<String, Object>> getCorrels(String market, String offset) {
    return correlRepository.getCorrels(market, offset);
  }

  public Map<String, Object> getCorrel(String ticker){    
    Map<String, Object> result = new HashMap<String, Object>();
    result.put("company", ticker);
    result.put("data", correlRepository.getCorrel(ticker));
    return result;
  }
}
