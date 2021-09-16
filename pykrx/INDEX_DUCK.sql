CREATE TABLE stocks  (
  date    date,
  ticker  varchar(10),
  name    varchar(255),
  close   bigint,
  volume  bigint,
  insVol  bigint,
  etcVol  bigint,
  indVol  bigint,
  forVol  bigint,
  insAmt  bigint,
  etcAmt  bigint,
  indAmt  bigint,
  forAmt  bigint,
  primary key (ticker, date)
) engine = InnoDB;

CREATE TABLE stocks_info  (
  ticker      varchar(10),
  name        varchar(255),
  market      varchar(10),
  cap         bigint,
  bps         double,
  per         double,
  pbr         double,
  eps         double,
  divi        double,
  dps         double,
  primary key (ticker, name)
) engine = InnoDB;

CREATE TABLE last_1m  (
  date        date,
  ticker      varchar(10),
  name        varchar(255),
  close       bigint,
  volume      bigint,
  insVolCum   bigint,
  etcVolCum   bigint,
  indVolCum   bigint,
  forVolCum   bigint,
  insAmtCum   bigint,
  etcAmtCum   bigint,
  indAmtCum   bigint,
  forAmtCum   bigint,
  primary key (ticker, date)
) engine = InnoDB;

CREATE TABLE last_3m  (
  date        date,
  ticker      varchar(10),
  name        varchar(255),
  close       bigint,
  volume      bigint,
  insVolCum   bigint,
  etcVolCum   bigint,
  indVolCum   bigint,
  forVolCum   bigint,
  insAmtCum   bigint,
  etcAmtCum   bigint,
  indAmtCum   bigint,
  forAmtCum   bigint,
  primary key (ticker, date)
) engine = InnoDB;

CREATE TABLE last_6m  (
  date        date,
  ticker      varchar(10),
  name        varchar(255),
  close       bigint,
  volume      bigint,
  insVolCum   bigint,
  etcVolCum   bigint,
  indVolCum   bigint,
  forVolCum   bigint,
  insAmtCum   bigint,
  etcAmtCum   bigint,
  indAmtCum   bigint,
  forAmtCum   bigint,
  primary key (ticker, date)
) engine = InnoDB;

CREATE TABLE last_12m  (
  date        date,
  ticker      varchar(10),
  name        varchar(255),
  close       bigint,
  volume      bigint,
  insVolCum   bigint,
  etcVolCum   bigint,
  indVolCum   bigint,
  forVolCum   bigint,
  insAmtCum   bigint,
  etcAmtCum   bigint,
  indAmtCum   bigint,
  forAmtCum   bigint,
  primary key (ticker, date)
) engine = InnoDB;

CREATE TABLE correl(
  ticker      varchar(10),
  name        varchar(255),
  period      varchar(10),
  insVolCum   double,
  etcVolCum   double,
  indVolCum   double,
  forVolCum   double,
  insAmtCum   double,
  etcAmtCum   double,
  indAmtCum   double,
  forAmtCum   double,
  primary key (ticker, period)
) engine = InnoDB;