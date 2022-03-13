import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
// import theme from './config/theme/Theme';

// import Routes from './routes/Router';

import DefaultLayout from './config/layout/DefaultLayout';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <DefaultLayout>
        oi
        {/* <Routes /> */}
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default App;
