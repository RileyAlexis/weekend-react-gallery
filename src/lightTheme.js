import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
      dark: '#090e27',
    },
    secondary: {
      main: '#8800aa',
      dark: '#eeadfd',
    },
    background: {
      default: '#bbdefb',
      paper: '#e0f7fa',
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro',
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
  },
});