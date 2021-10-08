import React, { Fragment } from 'react';
import CoefficientChartGrid from './CoefficientChartGrid';
import CoefficientSearchForm from './CoefficientSearchForm';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

class CoefficientChartGridContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      market: "KOSPI",
      minCap: "1000000000",
      maxCap: "10000000000000000",
      minPer: "0",
      maxPer: "1000000",
      investor: "ind",
      period: "3",
      entireList: [],
      displayList: [],
      starList: [],
      load: 'loading',
    };
    this.handleMarketChange=this.handleMarketChange.bind(this);
    this.handleMinCapChange=this.handleMinCapChange.bind(this);
    this.handleMaxCapChange=this.handleMaxCapChange.bind(this);
    this.handleMinPerChange=this.handleMinPerChange.bind(this);
    this.handleMaxPerChange=this.handleMaxPerChange.bind(this);
    this.handleInvestorChange=this.handleInvestorChange.bind(this);
    this.handlePeriodChange=this.handlePeriodChange.bind(this);
    this.sendQuery=this.sendQuery.bind(this);
  }

  handleMarketChange = (event) => {
    this.setState({market: event.target.value});
  };
  
  handleMinCapChange = (event) => {
    this.setState({minCap: event.target.value});
  };
  
  handleMaxCapChange = (event) => {
    this.setState({maxCap: event.target.value});
  };
  
  handleMinPerChange = (event) => {
    this.setState({minPer: event.target.value});
  };
  
  handleMaxPerChange = (event) => {
    this.setState({maxPer: event.target.value});
  };

  handleInvestorChange = (event) => {
    this.setState({investor: event.target.value});
  };
  
  handlePeriodChange = (event) => {
    this.setState({period: event.target.value});
  };

  sendQuery() {
    this.setState({
      load: 'loading'
    });
    fetch('/correlRank?market='+this.state.market
        +'&startCap='+this.state.minCap
        +'&endCap='+this.state.maxCap
        +'&startPer='+this.state.minPer
        +'&endPer='+this.state.maxPer
        +'&period='+this.state.period
        +'&investor='+this.state.investor)
      .then(res => res.json())
      .then(json => {
        if (json.length === 0) {
          // console.log(this)
          this.setState({
            entireList: [],
            displayList: [],
            load: 'empty'
          })
        } else {
          // console.log(json);
          this.setState({
            entireList: json,
            displayList: json.slice(0, 12),
            load: 'loaded'
          });
        }
      });
  }

  componentWillMount() {
    this.sendQuery();
  }

  isBottom(el) {
    // console.log("el.getBoundingClientRect().bottom" + el.getBoundingClientRect().bottom);
    // console.log("window.innerHeight" + window.innerHeight);
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }
  
  trackScrolling = () => {
    // if (this.state.entireList === null || this.state.displayList === null) {
      // return
    // }
    const wrappedElement = document.getElementById('gridContainer');
    // console.log(wrappedElement);
    if (wrappedElement !== null && this.isBottom(wrappedElement)) {
      // console.log('header bottom reached');
      var currentLength = this.state.displayList.length;
      this.setState({
        displayList: this.state.entireList.slice(0, currentLength + 12)
      })
    }
    
    if (this.state.displayList.length === this.state.entireList.length) {
      document.removeEventListener('scroll', this.trackScrolling);
    }
  };

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }
  
  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  // handleStarDisable = 
  
  // const filteredComponents = (data) => {
  //   data = data.filter((c) => {
  //   return c.name.indexOf(this.state.searchKeyword) > -1;
  //   });
  //   return data.map((c) => {
  //   return <Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
  //   });
  //   }
    
  handleStarRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id),
    });
  };

  render() {
    const { displayList, load } = this.state;
    const gridList = displayList.map(
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
    );

    if (load === 'loading') {
      return (
        <Fragment>
          <CoefficientSearchForm
            handleMarketChange={this.handleMarketChange} market={this.state.market}
            handleMinCapChange={this.handleMinCapChange} minCap={this.state.minCap}
            handleMaxCapChange={this.handleMaxCapChange} maxCap={this.state.maxCap}
            handleMinPerChange={this.handleMinPerChange} minPer={this.state.minPer}
            handleMaxPerChange={this.handleMaxPerChange} maxPer={this.state.maxPer}
            handleInvestorChange={this.handleInvestorChange} investor={this.state.investor}
            handlePeriodChange={this.handlePeriodChange} period={this.state.period}
            sendQuery={this.sendQuery}
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
            handleMarketChange={this.handleMarketChange} market={this.state.market}
            handleMinCapChange={this.handleMinCapChange} minCap={this.state.minCap}
            handleMaxCapChange={this.handleMaxCapChange} maxCap={this.state.maxCap}
            handleMinPerChange={this.handleMinPerChange} minPer={this.state.minPer}
            handleMaxPerChange={this.handleMaxPerChange} maxPer={this.state.maxPer}
            handleInvestorChange={this.handleInvestorChange} investor={this.state.investor}
            handlePeriodChange={this.handlePeriodChange} period={this.state.period}
            sendQuery={this.sendQuery}
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
            handleMarketChange={this.handleMarketChange} market={this.state.market}
            handleMinCapChange={this.handleMinCapChange} minCap={this.state.minCap}
            handleMaxCapChange={this.handleMaxCapChange} maxCap={this.state.maxCap}
            handleMinPerChange={this.handleMinPerChange} minPer={this.state.minPer}
            handleMaxPerChange={this.handleMaxPerChange} maxPer={this.state.maxPer}
            handleInvestorChange={this.handleInvestorChange} investor={this.state.investor}
            handlePeriodChange={this.handlePeriodChange} period={this.state.period}
            sendQuery={this.sendQuery}
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
}

export default CoefficientChartGridContainer;