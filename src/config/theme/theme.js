import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';

export default createTheme(
  {
    palette: {
      primary: {
        main: '#120A8F',
      },
      secondary: {
        main: '#517adb',
      },
      background: {
        paper: '#ffffff',
      },
      transparentBackground: {
        main: 'rgba(0,0,0,50%)',
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: 0,
        },
        body: {
          height: '100vh',
          width: '100vw',
        },
      },
    },
  },
  ptBR
);
