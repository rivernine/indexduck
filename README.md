# Stocks in site

## Overview
Welcome to `stocksin.site` 🎈

## Architecture
|Web|Server|
|:-:|:-:|
|React|Spring-boot|

## Indicators
### RSI

## Pykrx
- ticker_name
  - `{ticker: name}`
- ticker_info
  - `{ticker: [info]}`
- info
  - |date|close|vol-b|vol-s|vol-nb|amt-b|amt-s|amt-nb|indi-b|indi-s|indi-nb|fore-b|fore-s|fore-nb|inst-b|inst-s|inst-nb|pens-b|pens-s|pens-nb|fina-b|fina-s|fina-nb|
    |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
    ||||||||||||||||||||||||
    - vol: 거래량(volume)
    - amt: 거래대금(amount)
    - indi: 개인(individual)
    - fore: 외국인(foreign)
    - inst: 기관(institution)
    - pens: 연기금(pension fund)
    - fina: 금융투자(finance)
    - b/s/nb: 매수/매도/순매수(buy/sell/netbuy)

```