package com.stocksinsite.core.service;

import java.util.List;
import java.util.Map;

public interface CoreService {
  public String print_hello();  
  public List<Map<String, Object>> getCorrels();
  public List<Map<String, Object>> getCorrel(String ticker);
}
