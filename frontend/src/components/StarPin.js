import React from 'react';
import StarSharpIcon from '@material-ui/icons/StarSharp';
import IconButton from '@material-ui/core/IconButton';

export default function StarPin() {
  const [star, setStar] = React.useState(false);

  const handleStarClick = () => {
      setStar(!star);
  };

  return (
    <IconButton 
      size="small" 
      style={{ position: "absolute", top: "13px", right: "13px" }}
      onClick={handleStarClick}>
      <StarSharpIcon color={star ? "inherit" : "disabled"}/>
    </IconButton>
  );
}