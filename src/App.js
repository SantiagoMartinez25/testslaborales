import './App.css';
import ButtonAppBar from './components/appBar/AppBar.jsx';
import RadioButtonsGroup from './components/neopir/NeoPIR'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette:{
    primary: {
      main: '#883997',
      contrastText:'#F7FFF7',
      
    },
    secondary:{
      main:'#002984',
      contrastText:'#F7FFF7',
    }
  },

  components: {
    MuiFormLabel:{
      styleOverrides:{
        root: {
          textAlign: 'left'
        }
      }
    }
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ButtonAppBar/>
        <RadioButtonsGroup />
      </ThemeProvider>
    </div>
  );
}

export default App;
