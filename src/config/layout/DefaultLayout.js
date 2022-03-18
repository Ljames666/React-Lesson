import { Grid } from '@mui/material';

import MyFooter from '../../components/footer/Footer';

function DefaultLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1c2541', color: '#25e668' }}>
      <div>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </div>
      <div style={{ height: '10%', bottom: '0px' }}>
        <MyFooter />
      </div>
    </div>
  );
}

export default DefaultLayout;
