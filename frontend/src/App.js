import './App.css';
import Dashboard from './components/Dashboard';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import { Route } from 'react-router-dom';

const darkTheme = createTheme({
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
      {/* <Route path="/" component={Dashboard} exact/> */}
      {/* <Route path="/chart" component={Dashboard} /> */}
      {/* <Route path="/search" component={Dashboard} /> */}
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
