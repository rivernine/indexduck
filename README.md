# Index duck

## Overview
Welcome to `indexduck.com` ๐

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
    - vol: ๊ฑฐ๋๋(volume)
    - amt: ๊ฑฐ๋๋๊ธ(amount)
    - indi: ๊ฐ์ธ(individual)
    - fore: ์ธ๊ตญ์ธ(foreign)
    - inst: ๊ธฐ๊ด(institution)
    - pens: ์ฐ๊ธฐ๊ธ(pension fund)
    - fina: ๊ธ์ตํฌ์(finance)
    - b/s/nb: ๋งค์/๋งค๋/์๋งค์(buy/sell/netbuy)


## mysql
- encoding.cnf
```cnf
[client]
default-character-set=utf8

[mysqld]
character-set-server=utf8
collation-server=utf8_general_ci
init_connect=SET collation_connection=utf8_general_ci
init_connect=SET NAMES utf8

[mysql]
default-character-set=utf8
```

- packet.cnf
```cnf
[mysqld]
max_allowed_packet=32M
```

- timeout.cnf
```cnf
[mysqld]
interactive_timeout=10
wait_timeout=10
```

