SELECT T2.ticker, T2.name, T2.period, T2.forVolCum, T1.cap, T1.per
SELECT *
FROM (
  SELECT * 
  FROM stocks_info 
  WHERE per != 0 
  ORDER BY per
) as T1, correl as T2
WHERE T2.period = 'last_3m' 
LIMIT 10;
