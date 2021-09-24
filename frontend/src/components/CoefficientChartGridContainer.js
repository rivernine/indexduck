import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CoefficientChartGrid from './CoefficientChartGrid';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   }
// }));

function createData (date, 종가, 개인, 기관, 외국인, 기타법인) {
  return { date, 종가, 개인, 기관, 외국인, 기타법인 }
}

class CoefficientChartGridContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      starList: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    // fetch('/getCorrels?market="kospi"&offset=0')
    fetch('/getStockOrderByCap?market=KOSPI&period=1&start=1&end=10')
      .then(res => res.json())
      // .then(json => console.log(json))
      .then(json => {
        var id = 0;
        var holder = {
          id: -1,
          name: "null",
          data: [],
        };
        var result = [];
        for (const item of json) {
          // first company
          if (holder.name === "null") {
            holder.id = id;
            holder.name = item.name;
            holder.data.push(
              createData(item.date, item.closeNorm, item.indVolCumNorm, item.insVolCumNorm, item.forVolCumNorm, item.etcVolCumNorm)
            )
          // same company
          } else if (holder.name === item.name) {
            holder.data.push(
              createData(item.date, item.closeNorm, item.indVolCumNorm, item.insVolCumNorm, item.forVolCumNorm, item.etcVolCumNorm)
            )
          // different company
          } else if (holder.name !== item.name) {
            result.push(holder);
            id ++;
            holder = {
              id: id,
              name: item.name,
              data: [],
            };
          } 
        }
        // push last holder
        result.push(holder);
        console.log(result);
        this.setState({
          isLoaded: true,
          list: result
        });
      });
  }

  // state = {
  //   starList: [],
  //   list: [
  //     {
  //       id: 0,
  //       company: "삼성전자",
  //       data: [
  //         createData("2021-07-30", 78500),
  //         createData("2021-08-02", 79300),
  //         createData("2021-08-03", 81400),
  //         createData("2021-08-04", 82900),
  //         createData("2021-08-05", 82100),
  //         createData("2021-08-06", 81500),
  //         createData("2021-08-09", 81500),
  //         createData("2021-08-10", 80200),
  //         createData("2021-08-11", 78500),
  //         createData("2021-08-12", 77000),
  //         createData("2021-08-13", 74400),
  //         createData("2021-08-17", 74200),
  //         createData("2021-08-18", 73900),
  //         createData("2021-08-19", 73100),
  //         createData("2021-08-20", 72700),
  //         createData("2021-08-23", 73300),
  //         createData("2021-08-24", 75600),
  //         createData("2021-08-25", 75700),
  //         createData("2021-08-26", 74600),
  //         createData("2021-08-27", 74300)
  //       ]
  //     },
  //     {
  //       id: 1,
  //       company: "SK하이닉스",
  //       data: [
  //         createData("2021-07-30", 112500),
  //         createData("2021-08-02", 116000),
  //         createData("2021-08-03", 120000),
  //         createData("2021-08-04", 121000),
  //         createData("2021-08-05", 120000),
  //         createData("2021-08-06", 118000),
  //         createData("2021-08-09", 116000),
  //         createData("2021-08-10", 112500),
  //         createData("2021-08-11", 105500),
  //         createData("2021-08-12", 100500),
  //         createData("2021-08-13", 101500),
  //         createData("2021-08-17", 101500),
  //         createData("2021-08-18", 104000),
  //         createData("2021-08-19", 102500),
  //         createData("2021-08-20", 102500),
  //         createData("2021-08-23", 103000),
  //         createData("2021-08-24", 105000),
  //         createData("2021-08-25", 103500),
  //         createData("2021-08-26", 104000),
  //         createData("2021-08-27", 103500)  
  //       ]
  //     }
  //   ]
  // }

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
    const { list, starList, isLoaded } = this.state;
    const gridList = list.map(
      stock => (
        <CoefficientChartGrid
          key={stock.id}
          name={stock.name}
          data={stock.data}
        />
      )
    );

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Grid container spacing={3}>
          {gridList}
        </Grid>
      );
    }
  }
}

export default CoefficientChartGridContainer;