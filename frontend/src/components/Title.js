import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Title(props) {
  return (
    <Typography component="h2" variant="subtitle1" color="initial" gutterBottom noWrap style={{ width: "90%"}}>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};