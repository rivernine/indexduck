import React from 'react';
import CoefficientChart from './CoefficientChart';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import StarPin from './StarPin';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import {  grey } from '@mui/material/colors';
import CoefficientTable from './CoefficientTable';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    // overflow: 'auto',
    flexDirection: 'column',
    height: 500,
    position: "relative",
    overflow: "hidden"
  }
}));


export default function CoefficientChartGrid(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper className={classes.paper}>
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        >
          <Avatar sx={{ bgcolor: grey[800], mr: 1, ml: -1}} variant="rounded" style={{ height: '30px', width: '30px' }}>
          {props.rank}
          </Avatar>
          <Title>[{props.ticker}] {props.name}</Title>
        </Box>
        <StarPin ticker={props.ticker}/>
        <CoefficientChart class="mb-2" data={props.data}/>
        {/* <Description>(CAP: {props.cap} PER: {props.per})</Description> */}
        <CoefficientTable 
          indVolCumCorrel={props.indVolCumCorrel}
          insVolCumCorrel={props.insVolCumCorrel}
          forVolCumCorrel={props.forVolCumCorrel}
          etcVolCumCorrel={props.etcVolCumCorrel}
          cap={props.cap}
          per={props.per}
        />
      </Paper>
    </Grid>
  )
}