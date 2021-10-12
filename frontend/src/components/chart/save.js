function CoefficientChartGridContainer() {
  
    const [market, setMarket] = useState("KOSPI")
    const [minCap, setMinCap] = useState("1000000000")
    const [maxCap, setMaxCap] = useState("10000000000000000")
    const [minPer, setMinPer] = useState("0")
    const [maxPer, setMaxPer] = useState("1000000")
    const [investor, setInvestor] = useState("ind")
    const [period, setPeriod] = useState("3")
    const [entireList, setEntireList] = useState([])
    const [displayList, setDisplayList] = useState([])
    const [starList, setStarList] = useState([])
    const [load, setLoad] = useState('loading')
    const [gridList, setGridList] =  useState([])
  
    useEffect(() => {
      (() => {
        sendQuery()
        document.addEventListener('scroll', trackScrolling);
      })();
      return () => {
        document.removeEventListener('scroll', trackScrolling);
      };
    }, [])
  
    useEffect(() => {
      setGridList(
        displayList.map(
          stock => (
            <CoefficientChartGrid
              key={stock.rank}
              rank={stock.rank}
              name={stock.name}
              data={stock.graphData}
              ticker={stock.ticker}
              cap={stock.cap}
              per={stock.per}
              indVolCumCorrel={stock.indVolCumCorrel}
              insVolCumCorrel={stock.insVolCumCorrel}
              forVolCumCorrel={stock.forVolCumCorrel}
              etcVolCumCorrel={stock.etcVolCumCorrel}
            />
          )
        )
      )
    }, [displayList])
  
    function sendQuery() {
      setLoad('loading')
      fetch('/correlRank?market='+market
      +'&startCap='+minCap
      +'&endCap='+maxCap
      +'&startPer='+minPer
      +'&endPer='+maxPer
      +'&period='+period
      +'&investor='+investor)
      .then(res => res.json())
      .then(json => {
        if (json.length === 0) {
          setEntireList([])
          setDisplayList([])
          setLoad('empty')
        } else {
          setEntireList(json)
          setDisplayList(json.slice(0, 12))
          setLoad('loaded')
        }
      });
    }
    
    function isBottom(el) {
      // console.log("el.getBoundingClientRect().bottom" + el.getBoundingClientRect().bottom);
      // console.log("window.innerHeight" + window.innerHeight);
      return el.getBoundingClientRect().bottom <= window.innerHeight;
    }
    
    function trackScrolling() {
      // if (this.state.entireList === null || this.state.displayList === null) {
        // return
      // }
      const wrappedElement = document.getElementById('gridContainer');
      // console.log(wrappedElement);
      if (wrappedElement !== null && isBottom(wrappedElement)) {
        // console.log('header bottom reached');
        var currentLength = displayList.length
        setDisplayList(entireList.slice(0, currentLength + 12))
      }
      
      if (displayList.length === entireList.length) {
        document.removeEventListener('scroll', trackScrolling);
      }
    };
  
    if (load === 'loading') {
      return (
        <Fragment>
          <CoefficientSearchForm
            handleMarketChange={setMarket} market={market}
            handleMinCapChange={setMinCap} minCap={minCap}
            handleMaxCapChange={setMaxCap} maxCap={maxCap}
            handleMinPerChange={setMinPer} minPer={minPer}
            handleMaxPerChange={setMaxPer} maxPer={maxPer}
            handleInvestorChange={setInvestor} investor={investor}
            handlePeriodChange={setPeriod} period={period}
            sendQuery={sendQuery}
          />
          {/* <div style={{ width: '100%' }}> */}
          <Box 
            sx={{
              display: 'flex',
              height: 100,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CircularProgress />
          </Box>
          {/* </div> */}
        </Fragment>
      );
    } else if (load === 'loaded')  {
      return (
        <Fragment>
          <CoefficientSearchForm
            handleMarketChange={setMarket} market={market}
            handleMinCapChange={setMinCap} minCap={minCap}
            handleMaxCapChange={setMaxCap} maxCap={maxCap}
            handleMinPerChange={setMinPer} minPer={minPer}
            handleMaxPerChange={setMaxPer} maxPer={maxPer}
            handlePeriodChange={setPeriod} period={period}
            handleInvestorChange={setInvestor} investor={investor}
            sendQuery={sendQuery}
          />
          <Grid container spacing={3} id={'gridContainer'}>
            {gridList}
          </Grid>
        </Fragment>
      );
    } else if (load === 'empty')  {
      return (
        <Fragment>
          <CoefficientSearchForm
            handleMarketChange={setMarket} market={market}
            handleMinCapChange={setMinCap} minCap={minCap}
            handleMaxCapChange={setMaxCap} maxCap={maxCap}
            handleMinPerChange={setMinPer} minPer={minPer}
            handleMaxPerChange={setMaxPer} maxPer={maxPer}
            handlePeriodChange={setPeriod} period={period}
            handleInvestorChange={setInvestor} investor={investor}
            sendQuery={sendQuery}
          />
          <Box 
            sx={{
              display: 'flex',
              height: 100,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography align="center" variant="h3" color="initial">
              검색 결과를 찾을 수 없습니다.
            </Typography>
          </Box>
        </Fragment>
      )
    }
  }