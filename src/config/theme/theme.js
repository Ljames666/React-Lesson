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
  },
  ptBR
);

/* <div class="MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorSuccess MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl css-1hws7zw"><input aria-invalid="false" id="phone" type="text" class="MuiFilledInput-input MuiInputBase-input css-2bxn45" value=""></div> */
