// package com.stocksinsite.core.schedule;

// import com.stocksinsite.core.schedule.analysis.AnalysisJob;
// import com.stocksinsite.core.schedule.market.MarketJob;

// import org.springframework.scheduling.annotation.Scheduled;
// import org.springframework.stereotype.Component;

// import lombok.RequiredArgsConstructor;
// import lombok.extern.slf4j.Slf4j;

// @Slf4j
// @RequiredArgsConstructor
// @Component
// public class JobScheduler {

//   private final MarketJob marketJob;
//   private final AnalysisJob analysisJob;  

//   @Scheduled(fixedDelay = 1000)
//   public void runJob() {
//     marketJob.marketJob();
//     analysisJob.analysisJob();
//   }

// }
