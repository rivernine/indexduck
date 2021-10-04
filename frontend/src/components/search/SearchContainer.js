import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import CoefficientChart from '../chart/CoefficientChart';
import Title from '../Title';
import StockInfoTable from './StockInfoTable';
import StockHistoryTable from './StockHistoryTable';

const useStyles = makeStyles((theme) => ({
  coPaper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: 500,
    position: "relative",
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'gray',
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    width: '100%',
    height: 600,
    position: "relative",
  },
  paper2: {
    padding: theme.spacing(2),
    backgroundColor: 'gray',
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    width: 300,
    height: 600,
    position: "relative",
  },
  textfield: {
    "& .MuiInputBase-input.MuiAutocomplete-input": {
      color: "#E6E6FA",
      fontSize: 18
    },
    "& #custom-autocomplete-label": {
      color: "#E6E6FA"
    },
    "& .MuiButtonBase-root.MuiAutocomplete-clearIndicator": {
      color: "#6495ED"
    }
  }
}));

function createData(date, closeNorm, indVolCumNorm, insVolCumNorm, forVolCumNorm, etcVolCumNorm) {
  return { date, closeNorm, indVolCumNorm, insVolCumNorm, forVolCumNorm, etcVolCumNorm }
}

function createTicker(title, ticker, name, market) {
  return { title, ticker, name, market }
}

function SearchContainer(props) {
  const classes = useStyles();

  const [mounted, setMounted] = useState(false)
  const [stocks, setStocks] = useState([])
  const [selectedInfo, setSelectedInfo] = useState([])

  if (!mounted) {
    fetch('/getStockList')
      .then(res => res.json())
      .then(json => {
        var result = [];
        // console.log(json)
        for (const item of json) {
          result.push(createTicker("[" + item.ticker + "] " + item.name, item.ticker, item.name, item.market));
        }
        setStocks(result)
      })
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Paper className={classes.paper} sx={{ flexGrow: 1 }}>
              <Autocomplete
                id="custom-autocomplete"
                size="small"
                options={stocks}
                getOptionLabel={(option) => option.title}
                onChange={(event, value) => {
                  if (value !== null) {
                    fetch('/getStockInfo?ticker=' + value.ticker)
                      .then(res => res.json())
                      .then(json => {
                        json["id"] = 1 
                        setSelectedInfo([json])
                      })
                  }
                  else {
                    setSelectedInfo([])
                  }
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Choose a stock"
                    placeholder="Stock"
                    className={classes.textfield}
                  />
                )}
              />
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
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <StockHistoryTable />
          </Grid>
          <Grid item xs={8}>
            <StockInfoTable selectedInfo={selectedInfo} />
          </Grid>
        </Grid>
      </Box>
    </Container>

  );
}

export default SearchContainer;