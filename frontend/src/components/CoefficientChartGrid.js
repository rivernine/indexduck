import React from 'react';
import CoefficientChart from './CoefficientChart';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import StarPin from './StarPin';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: 300,
    position: "relative"
  }
}));


export default function CoefficientChartGrid(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper className={classes.paper}>
        <Title>{props.company}</Title>
        <StarPin />
        <CoefficientChart data={props.data}/>
      </Paper>
    </Grid>
  )
}