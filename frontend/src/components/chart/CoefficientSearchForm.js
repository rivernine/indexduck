import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Divider from '@mui/material/Divider';

const useOutlinedInputStyles = makeStyles(theme => ({
  root: {
    "& $notchedOutline": {
      borderColor: "transparent"
    },
    "&:hover $notchedOutline": {
      borderColor: "transparent"
    },
    "&$focused $notchedOutline": {
      borderColor: "transparent"
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    }
  },
  focused: {},
  notchedOutline: {}
}));

export default function CoefficientSearchForm(props) {
  const outlinedInputClasses = useOutlinedInputStyles()
  const theme = useTheme();
  
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 2,
          mt: -2,
          mb: 3,
          bgcolor: theme.palette.background.default,
          border: 1,
          borderRadius: 2,
          borderColor: theme.palette.text.disabled,
          height: 70,
          justifyContent: 'center'
        }}
      >

        <Box sx={{ p: 0, bgcolor: theme.palette.background.default }}>
          <Typography><strong>Market:</strong></Typography>
        </Box>
        <Box sx={{ minWidth: 120, p: 0, m: 0, bgcolor: theme.palette.background.default }}>
          <FormControl fullWidth>
            <Select
              input={
                <OutlinedInput
                  id="outlined-age-simple"
                  classes={outlinedInputClasses}
                />
              }
              id="demo-simple-select"
              value={props.market}
              onChange={props.handleMarketChange}
            >
              <MenuItem value={'KOSPI'}>KOSPI</MenuItem>
              <MenuItem value={'KOSDAQ'}>KOSDAQ</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Divider orientation="vertical" flexItem sx={{background: theme.palette.text.disabled}}/>
        <Box sx={{ ml: 1, p: 1, bgcolor: theme.palette.background.default }}>
          <Typography><strong>CAP:</strong></Typography>
        </Box>
        <Box sx={{ minWidth: 100, px: 0, m: 0, bgcolor: theme.palette.background.default }}>
          <FormControl fullWidth>
            <Select
              input={
                <OutlinedInput
                  id="outlined-age-simple"
                  classes={outlinedInputClasses}
                />
              }
              id="demo-simple-select"
              value={props.minCap}
              onChange={props.handleMinCapChange}
            >
              <MenuItem value={'1000000000'}>10억</MenuItem>
              <MenuItem value={'10000000000'}>100억</MenuItem>
              <MenuItem value={'100000000000'}>1000억</MenuItem>
              <MenuItem value={'1000000000000'}>1조</MenuItem>
              <MenuItem value={'10000000000000'}>10조</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ p: 0, bgcolor: theme.palette.background.default }}>
          <Typography><strong>~</strong></Typography>
        </Box>
        <Box sx={{ minWidth: 100, px: 0, m: 0, bgcolor: theme.palette.background.default }}>
          <FormControl fullWidth>
            <Select
              input={
                <OutlinedInput
                  id="outlined-age-simple"
                  classes={outlinedInputClasses}
                />
              }
              id="demo-simple-select"
              value={props.maxCap}
              onChange={props.handleMaxCapChange}
            >
              <MenuItem value={'10000000000'}>100억</MenuItem>
              <MenuItem value={'100000000000'}>1000억</MenuItem>
              <MenuItem value={'1000000000000'}>1조</MenuItem>
              <MenuItem value={'10000000000000'}>10조</MenuItem>
              <MenuItem value={'10000000000000000'}>MAX</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Divider orientation="vertical" flexItem sx={{background: theme.palette.text.disabled}}/>
        <Box sx={{ ml: 1, p: 1, bgcolor: theme.palette.background.default }}>
          <Typography><strong>PER:</strong></Typography>
        </Box>
        <Box sx={{ minWidth: 85, px: 0, m: 0, bgcolor: theme.palette.background.default }}>
          <FormControl fullWidth>
            <Select
              input={
                <OutlinedInput
                  id="outlined-age-simple"
                  classes={outlinedInputClasses}
                />
              }
              id="demo-simple-select"
              value={props.minPer}
              onChange={props.handleMinPerChange}
            >
              <MenuItem value={'0'}>0</MenuItem>
              <MenuItem value={'1'}>1</MenuItem>
              <MenuItem value={'10'}>10</MenuItem>
              <MenuItem value={'100'}>100</MenuItem>
              <MenuItem value={'1000'}>1000</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ p: 0, bgcolor: theme.palette.background.default }}>
          <Typography><strong>~</strong></Typography>
        </Box>
        <Box sx={{ minWidth: 85, px: 0, m: 0, bgcolor: theme.palette.background.default }}>
          <FormControl fullWidth>
            <Select
              input={
                <OutlinedInput
                  id="outlined-age-simple"
                  classes={outlinedInputClasses}
                />
              }
              id="demo-simple-select"
              value={props.maxPer}
              onChange={props.handleMaxPerChange}
              // {(e) => props.handleMaxPerChange(e.target.value)}
            >
              <MenuItem value={'1'}>1</MenuItem>
              <MenuItem value={'10'}>10</MenuItem>
              <MenuItem value={'100'}>100</MenuItem>
              <MenuItem value={'1000'}>1000</MenuItem>
              <MenuItem value={'1000000'}>MAX</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Divider orientation="vertical" flexItem sx={{background: theme.palette.text.disabled}}/>
        <Box sx={{ ml: 1, p: 1, bgcolor: theme.palette.background.default }}>
          <Typography><strong>Rank By:</strong></Typography>
        </Box>
        <Box sx={{ minWidth: 115, p: 0, m: 0, bgcolor: theme.palette.background.default }}>
          <FormControl fullWidth>
            <Select
              input={
                <OutlinedInput
                  id="outlined-age-simple"
                  classes={outlinedInputClasses}
                />
              }
              id="demo-simple-select"
              value={props.investor}
              onChange={props.handleInvestorChange}
            >
              <MenuItem value={'ind'}>개인</MenuItem>
              <MenuItem value={'ins'}>기관</MenuItem>
              <MenuItem value={'for'}>외국인</MenuItem>
              <MenuItem value={'etc'}>기타법인</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Divider orientation="vertical" flexItem sx={{background: theme.palette.text.disabled}}/>
        <Box sx={{ ml: 1, p: 1, bgcolor: theme.palette.background.default }}>
          <Typography><strong>Period:</strong></Typography>
        </Box>
        <Box sx={{ minWidth: 70, p: 0, m: 0, pr: 1, bgcolor: theme.palette.background.default }}>
          <FormControl fullWidth>
            <Select
              input={
                <OutlinedInput
                  id="outlined-age-simple"
                  classes={outlinedInputClasses}
                />
              }
              id="demo-simple-select"
              value={props.period}
              onChange={props.handlePeriodChange}
            >
              <MenuItem value={'1'}>1M</MenuItem>
              <MenuItem value={'3'}>3M</MenuItem>
              <MenuItem value={'6'}>6M</MenuItem>
              <MenuItem value={'12'}>1Y</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ p: 0, bgcolor: theme.palette.background.default }}>
          <Button size="large" variant="contained" color="error" onClick={props.sendQuery}><strong>Search</strong></Button>
        </Box>
      </Box>
    </div>

    // <Box sx={{ alignItems: 'center', borderColor: 'blue'}}>
    // <form onSubmit={this.handleSubmit.bind(this)} >
    // <Typography variant="h6" component="h2">
    //     종목검색조건
    // </Typography>
    // 시장: 
    // <FormControl sx={{ m: 1, minWidth: 120 }}>
    //     <InputLabel id="demo-simple-select-helper-label">시장</InputLabel>
    //     <Select
    //     labelId="demo-simple-select-helper-label"
    //     id="demo-simple-select-helper"
    //     value={this.state.market}
    //     label="시장"
    //     onChange={this.handleMarketChange}
    //     className={classes.select}
    //     inputProps={{
    //         classes: {
    //             icon: classes.icon,
    //         },
    //     }}
    //     >
    //     <MenuItem value={'KOSPI'}>KOSPI</MenuItem>
    //     <MenuItem value={'KOSDAQ'}>KOSDAQ</MenuItem>
    //     </Select>
    // </FormControl>
    // <TextField id="standard-basic" label="Standard" variant="standard" 
    //     value={this.state.password}
    //     onInput={ e=>this.setState({password: e.target.value})} />
    // <TextField id="standard-basic" label="Standard" variant="standard" 
    //     value={this.state.email}
    //     onInput={ e=>this.setState({email: e.target.value})} />
    // <Button 
    //     variant="contained"
    //     type="submit">
    //     Contained
    // </Button>
    // </form>
    // {/* </Paper> */}
    // </Box >
  );
}