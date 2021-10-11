import './App.css';
import Dashboard from './components/Dashboard';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';


const darkTheme = createTheme({
  typography: {
    h3: {
      fontSize: '1.4rem'
    },
    subtitle1: {
      fontSize: '1.1rem'
    },
    subtitle2: {
      fontSize: '0.7rem'
    },
  },
  palette: {
    type: 'dark',
    background: {
      default: '#202020',
      paper: '#303030',
    },
  },
  stock: {
    close: '#DEDFE1', //white 
    ind: '#FFC61E', // yellow
    ins: '#0072C6', // blue
    for: '#FD4F00', // red
    etc: '#00D7A7', // green
  },
});


function App() {
  sessionStorage.setItem("searchTicker", "005930")
  sessionStorage.setItem("market", "KOSPI")
  sessionStorage.setItem("minCap", "1000000000")
  sessionStorage.setItem("maxCap", "10000000000000000")
  sessionStorage.setItem("minPer", "0")
  sessionStorage.setItem("maxPer", "1000000")
  sessionStorage.setItem("investor", "ind")
  sessionStorage.setItem("period", "3")
  return (
      <ThemeProvider theme={darkTheme}>        
        <Dashboard />
      </ThemeProvider>
  );
}

export default App;
