package com.stocksinsite.core.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class VolCumNormGraphData {
    @JsonIgnore private String ticker;
    private String date;
    private float closeNorm;
    private float indVolCumNorm;
    private float insVolCumNorm;
    private float forVolCumNorm;
    private float etcVolCumNorm;
}
