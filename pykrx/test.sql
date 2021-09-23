SELECT *
FROM (
  SELECT * 
  FROM stocks_info 
  WHERE per != 0 
  ORDER BY per
) as T1, correl as T2
WHERE T2.period = 'last_3m' 
LIMIT 10;

SELECT *
FROM (
  SELECT ticker, name, cap, RANK() OVER(ORDER BY cap DESC) AS rnk
  FROM stocks_info
) AS T1
WHERE T1.rnk < 10;

SELECT *
FROM (
  SELECT ticker, name, period, insVolCum, RANK() OVER(ORDER BY insVolCum DESC) AS rnk
  FROM correl
  WHERE period = 'last_1m'
) AS T1
WHERE T1.rnk< 10;