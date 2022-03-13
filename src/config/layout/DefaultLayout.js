import {Grid} from '@mui/material'

function DefaultLayout ({children}){
return (
    <Grid container>
<Grid item xs={12}>
    <ListItem/>
</Grid>
<Grid item xs={12}>
{children}
</Grid>
<Grid item xs={12}>
<ListJson/>
</Grid>
    </Grid>
)
}

export default DefaultLayout;