import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import CoefficientChartGrid from '../chart/CoefficientChartGrid';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';


// componentWillMount() {
//   fetch('/getCorrels?market="kospi"&offset=0')
//   // fetch('/getStockOrderByCap?market=KOSPI&period=1&start=1&end=100')
//     .then(res => res.json())
//     // .then(json => console.log(json))
//     .then(json => {
//       var id = 0;
//       var holder = {
//         id: -1,
//         name: "null",
//         data: [],
//       };
//       var result = [];
//       for (const item of json) {
//         // first company
//         if (holder.name === "null") {
//           holder.id = id;
//           holder.name = item.name;
//           holder.data.push(
//             createData(item.date, item.closeNorm, item.indVolCumNorm, item.insVolCumNorm, item.forVolCumNorm, item.etcVolCumNorm)
//           )
//         // same company
//         } else if (holder.name === item.name) {
//           holder.data.push(
//             createData(item.date, item.closeNorm, item.indVolCumNorm, item.insVolCumNorm, item.forVolCumNorm, item.etcVolCumNorm)
//           )
//         // different company
//         } else if (holder.name !== item.name) {
//           result.push(holder);
//           id ++;
//           holder = {
//             id: id,
//             name: item.name,
//             data: [],
//           };
//         } 
//       }
//       // push last holder
//       result.push(holder);
//       console.log(result);
//       this.setState({
//         entireList: result,
//         displayList: result.slice(0, 12),
//         isLoaded: true
//       });
//     });
// }

// componentDidMount() {
//   document.addEventListener('scroll', this.trackScrolling);
// }

// componentWillUnmount() {
//   document.removeEventListener('scroll', this.trackScrolling);
// }

const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  }
];

function SearchContainer(props) {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300, color: 'red' }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <Grid>
          <Paper >
            <TextField
              {...params}
              placeholder="test"
              color="secondary" 
              focused
              label="Choose a stock"
              inputProps={{
                ...params.inputProps,
              }}
            />
          </Paper>
        </Grid>
      )}
    />
  );
}

export default (SearchContainer);