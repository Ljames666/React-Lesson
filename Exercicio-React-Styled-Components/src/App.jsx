import { ThemeProvider } from 'styled-components';
import theme from './config/theme/theme';
import Router from './routes/Router';
import DefaultLayout from './config/layout/Default';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default App;
