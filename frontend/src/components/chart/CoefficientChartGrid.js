import React from 'react';
import CoefficientChart from './CoefficientChart';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Description from './Description';
import StarPin from './StarPin';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    // overflow: 'auto',
    flexDirection: 'column',
    height: 400,
    position: "relative",
    overflow: "hidden"
  }
}));


export default function CoefficientChartGrid(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper className={classes.paper}>
        <Title>#{props.rank}. {props.name}</Title>
        <Description></Description>
        <StarPin ticker={props.ticker}/>
        <CoefficientChart class="mb-2" data={props.data}/>
      </Paper>
    </Grid>
  )
}