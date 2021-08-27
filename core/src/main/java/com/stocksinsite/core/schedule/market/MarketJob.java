package com.stocksinsite.core.schedule.market;

import com.stocksinsite.core.schedule.market.impl.MarketImpl;

import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class MarketJob {
  
  private final MarketImpl marketImpl;

  public void marketJob() {
    marketImpl.marketJob();
  }
}
