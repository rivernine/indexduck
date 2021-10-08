import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

export default function Description(props) {
  const theme = useTheme();
  return (
    <Typography sx={{ mx: 4, color: theme.palette.text.disabled}}component="h4" variant="subtitle2" noWrap style={{ width: "90%"}}>
      {props.children}
    </Typography>
  );
}

Description.propTypes = {
  children: PropTypes.node,
};