import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function StockChartTitle(props) {
  return (
    <Typography component="h2" variant="subtitle1" color="initial" noWrap style={{ width: "90%"}}>
      {props.children}
    </Typography>
  );
}

StockChartTitle.propTypes = {
  children: PropTypes.node,
};