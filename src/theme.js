import {
  createMuiTheme
} from '@material-ui/core/styles';
import {
  red
} from '@material-ui/core/colors';


// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#03506f',
    },
    secondary: {
      main: '#eef3f8',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: "TESCO-Modern"
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
      }, 
    }
  },
  shape:{
    borderRadius: 0
  }
});


export default theme;