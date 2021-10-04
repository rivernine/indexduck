package com.stocksinsite.core.dto;

import com.stocksinsite.core.dao.StockInfoQueryDAO;

import lombok.Data;

@Data
public class CorrelRankByVolCumRequestDTO {
    private String market; // KOSPI, KOSDAQ
    private long startCap;
    private long endCap;
    private int startPer;
    private int endPer;
    private String period; // 1, 3, 6, 12
    private String investor; // ind, ins, for, etc

    public StockInfoQueryDAO toStockInfoQueryDAO() {
        return new StockInfoQueryDAO(this.market, this.startCap, this.endCap
                , this.startPer, this.endPer, this.period, this.investor);
    }
}