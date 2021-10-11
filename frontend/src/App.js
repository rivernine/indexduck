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
  return (
      <ThemeProvider theme={darkTheme}>        
        <Dashboard />
      </ThemeProvider>
  );
}

export default App;
