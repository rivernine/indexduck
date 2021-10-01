import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import CoefficientChartGrid from '../chart/CoefficientChartGrid';
import CoefficientChart from '../chart/CoefficientChart';
import Title from '../Title';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
]

const useStyles = makeStyles((theme) => ({
  coPaper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: 500,
    position: "relative",
    overflow: "hidden"
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'white',
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    width: 1000,
    height: 600,
    position: "relative",
    overflow: "hidden"
  }
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function createData(date, closeNorm, indVolCumNorm, insVolCumNorm, forVolCumNorm, etcVolCumNorm) {
  return { date, closeNorm, indVolCumNorm, insVolCumNorm, forVolCumNorm, etcVolCumNorm }
}

function SearchContainer(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="100%">
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Autocomplete
              id="size-small-standard"
              size="small"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              defaultValue={top100Films[13]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Choose a stock"
                  placeholder="Stock"
                />
              )}
            />
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={12}>
            <Paper className={classes.coPaper}>
              <Title>{"SK하이닉스"}</Title>
              <CoefficientChart class="mb-2" data={[
                createData("2021-07-30", 112500),
                createData("2021-08-02", 116000),
                createData("2021-08-03", 120000),
                createData("2021-08-04", 121000),
                createData("2021-08-05", 120000),
                createData("2021-08-06", 118000),
                createData("2021-08-09", 116000),
                createData("2021-08-10", 112500),
                createData("2021-08-11", 105500),
                createData("2021-08-12", 100500),
                createData("2021-08-13", 101500),
                createData("2021-08-17", 101500),
                createData("2021-08-18", 104000),
                createData("2021-08-19", 102500),
                createData("2021-08-20", 102500),
                createData("2021-08-23", 103000),
                createData("2021-08-24", 105000),
                createData("2021-08-25", 103500),
                createData("2021-08-26", 104000),
                createData("2021-08-27", 103500)
              ]} />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
      {/* </Box> */}
    </Container>

  );
}

export default SearchContainer;