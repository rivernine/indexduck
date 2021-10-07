import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Description(props) {
  return (
    <Typography component="h4" variant="subtitle1" color="initial" gutterBottom noWrap style={{ width: "90%"}}>
      {props.children}
    </Typography>
  );
}

Description.propTypes = {
  children: PropTypes.node,
};