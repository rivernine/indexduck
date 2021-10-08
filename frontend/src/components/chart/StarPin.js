import React from 'react';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import IconButton from '@material-ui/core/IconButton';

export default function StarPin(props) {

  const handleStarClick = () => {
      console.log(props.ticker)
  };

  return (
    <IconButton 
      size="medium" 
      style={{ position: "absolute", top: "6px", right: "6px" }}
      onClick={handleStarClick}>
      {/* <SearchIcon color={star ? "inherit" : "disabled"}/> */}
      <QueryStatsIcon color="inherit"/>
    </IconButton>
  );
}