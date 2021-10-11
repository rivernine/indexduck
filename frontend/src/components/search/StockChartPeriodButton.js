import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function StockChartPeriodButton(props) {
  const [alignment, setAlignment] = React.useState(sessionStorage.getItem("searchPeriod"));

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null){
      sessionStorage.setItem("searchPeriod", newAlignment)
      props.onChange(null, props.selectedValue)
      setAlignment(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      color="warning"
      value={alignment}
      exclusive
      onChange={handleChange}      
      // onChange = {() => {}}
    >
      <ToggleButton value="1" sx={{color: 'gray'}}>1M</ToggleButton>
      <ToggleButton value="3" sx={{color: 'gray'}}>3M</ToggleButton>
      <ToggleButton value="6" sx={{color: 'gray'}}>6M</ToggleButton>
      <ToggleButton value="12" sx={{color: 'gray'}}>12M</ToggleButton>
    </ToggleButtonGroup>
  );
}