-- 시가총액 순위 TOP 10 
SELECT *
FROM (
  SELECT ticker, name, cap, RANK() OVER(ORDER BY cap DESC) AS rnk
  FROM stocks_info
) AS T1
WHERE T1.rnk <= 10;

-- 기관 누적 거래량 상관계수 TOP 10
SELECT *
FROM (
  SELECT ticker, name, period, insVolCum, RANK() OVER(ORDER BY insVolCum DESC) AS rnk
  FROM correl
  WHERE period = 'last_1m'
) AS T1
WHERE T1.rnk <= 10;

-- 코스피 시가총액 TOP10 기업의 상관계수
SELECT correl.*, T1.cap
FROM (
  SELECT ticker, name, cap, RANK() OVER(ORDER BY cap DESC) AS rnk
  FROM stocks_info
  where market = 'KOSPI'
) AS T1
LEFT JOIN correl
ON T1.ticker = correl.ticker
WHERE T1.rnk <= 10
AND period = 'last_3m';

-- 시가총액 start~end등의 기업들의 정보를 조회한다.
SELECT T2.date, T2.name, T2.closeNorm, T2.indVolCumNorm, T2.insVolCumNorm, T2.forVolCumNorm, T2.etcVolCumNorm
FROM (
  SELECT ticker, name, cap, RANK() OVER(ORDER BY cap DESC) AS rnk
  FROM stocks_info
  WHERE market = 'KOSPI'
) AS T1
LEFT JOIN last_1m_norm AS T2
ON T1.ticker = T2.ticker
WHERE rnk <= 1;

-- 시가총액, PER의 범위 내 기업들 중 correl의 순위 조회
SELECT *
FROM (
  SELECT T1.ticker, T1.name, correl.period, correl.ForVolCum, RANK() OVER(ORDER BY correl.ForVolCum DESC) AS rnk, T1.cap, T1.per
  FROM (
    SELECT ticker, name, cap, per
    FROM stocks_info
    WHERE cap >= 1
    AND cap <= 100000000000
    AND per >= 1
    AND per <= 10
  ) AS T1
  LEFT JOIN correl
  ON T1.ticker = correl.ticker
) AS JT1
WHERE JT1.rnk >= 1
AND JT1.rnk <= 10;