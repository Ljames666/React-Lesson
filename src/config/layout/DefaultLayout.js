import { Grid } from '@mui/material';
import ListItem from '../../components/list/ListItems';
import MyFooter from '../../components/footer/Footer';
import ListJson from '../../components/listJson/ListJson';

function DefaultLayout({ children }) {
  return (
    <div style={{ height: '100vh', backgroundColor: '#080b0d', color: '#25e668' }}>
      <div style={{ height: '90%' }}>
        <Grid container sx={{ height: '90%' }}>
          <Grid item xs={12} md={4} sx={{ height: '100%', overflowY: 'auto', padding: '0 10px' }}>
            <ListItem />
          </Grid>
          <Grid item xs={12} md={4} sx={{ marginTop: '100px' }}>
            {children}
          </Grid>
          <Grid item xs={12} md={4} sx={{ height: '100%', overflowY: 'auto', padding: '0 10px' }}>
            <ListJson />
          </Grid>
        </Grid>
      </div>

      <div>
        <MyFooter />
      </div>
    </div>
  );
}

export default DefaultLayout;
