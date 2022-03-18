import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme/theme';
import Routes from './routes/Router';

import DefaultLayout from './config/layout/DefaultLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout>
        <Routes />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default App;
