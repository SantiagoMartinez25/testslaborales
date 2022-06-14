import './App.css';
import ButtonAppBar from './components/appBar/AppBar.jsx';
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
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ButtonAppBar/>
      </ThemeProvider>
    </div>
  );
}

export default App;
