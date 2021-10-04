package com.stocksinsite.core.dto;

import java.util.ArrayList;

import com.stocksinsite.core.entity.VolCumNormGraphData;

import lombok.Data;

@Data
public class CorrelRankByVolCumResponseDTO {
    private int rank;
    private String ticker;
    private String name;
    private long cap;
    private float per;
    private float indVolCumCorrel;
    private float insVolCumCorrel;
    private float forVolCumCorrel;
    private float etcVolCumCorrel;
    private ArrayList<VolCumNormGraphData> graphData = new ArrayList<VolCumNormGraphData>();
}
