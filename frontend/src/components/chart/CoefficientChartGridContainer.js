import React from 'react';
import CoefficientChartGrid from './CoefficientChartGrid';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   }
// }));

function createData (date, closeNorm, indVolCumNorm, insVolCumNorm, forVolCumNorm, etcVolCumNorm) {
  return { date, closeNorm, indVolCumNorm, insVolCumNorm, forVolCumNorm, etcVolCumNorm }
}

class CoefficientChartGridContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entireList: [],
      displayList: [],
      starList: [],
      isLoaded: false,
    };
  }

  componentWillMount() {
    fetch('/correlRank?market=KOSPI&startCap=100000000000&endCap=1000000000000&startPer=10&endPer=100&period=12&investor=for')
      .then(res => res.json())
      .then(json => {

        console.log(json);
        this.setState({
          entireList: json,
          displayList: json.slice(0, 12),
          isLoaded: true
        });
      });
  }

  isBottom(el) {
    // console.log("el.getBoundingClientRect().bottom" + el.getBoundingClientRect().bottom);
    // console.log("window.innerHeight" + window.innerHeight);
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }
  
  trackScrolling = () => {
    const wrappedElement = document.getElementById('gridContainer');
    if (this.isBottom(wrappedElement)) {
      console.log('header bottom reached');
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
    const { displayList, isLoaded } = this.state;
    const gridList = displayList.map(
      stock => (
        <CoefficientChartGrid
          key={stock.rank}
          name={stock.name}
          data={stock.graphData}
        />
      )
    );

    if (!isLoaded) {
      return (
        <Typography align="center" component="h2" color="initial">
          Loading...
        </Typography>
      );
    } else {
      return (
        <Grid container spacing={3} id={'gridContainer'}>
          {gridList}
        </Grid>
      );
    }
  }
}

export default CoefficientChartGridContainer;