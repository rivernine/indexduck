package com.stocksinsite.core.dao;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class StockInfoQueryDAO {
    private String market; // KOSPI, KOSDAQ
    private long startCap;
    private long endCap;
    private int startPer;
    private int endPer;
    private String period; // 1, 3, 6, 12
    private String investor; // ind, ins, for, etc
}