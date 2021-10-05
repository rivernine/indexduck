package com.stocksinsite.core.dao;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
public class GraphDataQueryDAO {
    private String period;
    private List<String> tickers; 
}
