from pykrx import stock
from datetime import datetime

if __name__ == "__main__":
  today = datetime.today().isoformat().split('T')[0].replace('-', '')
  tickers = stock.get_market_ticker_list(today)
  print(tickers)
  