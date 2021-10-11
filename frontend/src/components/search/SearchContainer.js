import * as React from 'react';
import { useState, useEffect } from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import StockInfoTable from './StockInfoTable';
import StockHistoryTable from './StockHistoryTable';
import StockChart from './StockChart';


const useStyles = makeStyles((theme) => ({
  coPaper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: "100%",
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

function createChart(id, date, closeNorm, indVolCumNorm, insVolCumNorm, forVolCumNorm, etcVolCumNorm) {
  return { id, date, closeNorm, indVolCumNorm, insVolCumNorm, forVolCumNorm, etcVolCumNorm }
}

function createTicker(title, ticker, name, market) {
  return { title, ticker, name, market }
}

function createHistory(id, date, indVol, insVol, forVol, etcVol) {
  return { id, date, indVol, insVol, forVol, etcVol }
}



function SearchContainer(props) {
  const classes = useStyles();

  const [mounted, setMounted] = useState(false)
  const [stocks, setStocks] = useState([])
  const [selected, setSelected] = useState("")
  const [initValue, setInitValue] = useState(undefined)
  const [selectedValue, setSelectedValue] = useState(undefined)
  const [selectedChart, setSelectedChart] = useState([])
  const [selectedInfo, setSelectedInfo] = useState([])
  const [selectedHistory, setSelectedHistory] = useState([])

  function onChange(event, value) {
    if (value !== null && value !== undefined) {
      sessionStorage.setItem("searchTicker", value.ticker)
      setSelected(value.name)
      setSelectedValue(value)
      fetch('/getStock?ticker=' + value.ticker + "&period=" + sessionStorage.getItem("searchPeriod"))
        .then(res => res.json())
        .then(json => {
          var id = 0
          var result = []
          for (const item of json)
            result.push(createChart(id++, item.date, item.closeNorm, item.indVolCumNorm, item.insVolCumNorm, item.forVolCumNorm, item.etcVolCumNorm))
          setSelectedChart(result)
        })
      fetch('/getStockInfo?ticker=' + value.ticker)
        .then(res => res.json())
        .then(json => {
          json["id"] = 1
          setSelectedInfo([json])
        })
      fetch('/getStockHistory?ticker=' + value.ticker)
        .then(res => res.json())
        .then(json => {
          var id = 0
          var result = []
          for (const item of json)
            result.push(createHistory(id++, item.date, item.indVol, item.insVol, item.forVol, item.etcVol))
          setSelectedHistory(result)
        })
    }
    else {
      setSelected("")
      setSelectedChart([])
      setSelectedInfo([])
      setSelectedHistory([])
      setSelectedValue(undefined)
    }
  }

  useEffect(() => {
    if (!mounted) {
      fetch('/getStockList')
        .then(res => res.json())
        .then(json => {
          var result = [];
          for (const item of json)
            result.push(createTicker("[" + item.ticker + "] " + item.name, item.ticker, item.name, item.market));
          setStocks(result)
        })
      setMounted(true)
    }
  }, [mounted])

  useEffect(() => {
    if (initValue !== undefined) {
      onChange(null, initValue)
    }
  }, [initValue])

  useEffect(() => {
    var stock = stocks.find((stock) => stock.ticker === sessionStorage.getItem("searchTicker"))
    setInitValue(stock)
    setSelectedValue(stock)
  }, [stocks])

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
                onChange={(event, value) => { onChange(event, value) }}
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
                <StockChart selected={selected} selectedChart={selectedChart} selectedValue={selectedValue} onChange={onChange} />
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <StockHistoryTable selectedHistory={selectedHistory} />
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