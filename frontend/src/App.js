import './App.css';
import Dashboard from './components/Dashboard';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#202020',
      paper: '#303030',
    },
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
