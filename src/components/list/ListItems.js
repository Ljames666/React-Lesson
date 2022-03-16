import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { removeNumber } from '../../store/ListPhoneSlice';

export default function ListItem() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.listPhone);
  const [dimiss, setDismiss] = useState({ name: undefined });
  useEffect(() => {
    dispatch(removeNumber(dimiss));
  }, [dimiss]);

  function handleClick(e) {
    setDismiss({ name: e.target.name });
  }
  return (
    <>
      <Typography sx={{ margin: '15px' }}>Contacts</Typography>
      {data.map((item) => {
        return (
          <Card sx={{ margin: '1px' }}>
            <CardContent>
              <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Phone</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">City</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row" sx={{ fontSize: 10 }}>
                      {item.name}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: 10 }}>
                      {item.phone}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: 10 }}>
                      {item.email}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: 10 }}>
                      {item.city}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardActions>
              <Button
                name={item.name.toString()}
                type="button"
                color="success"
                variant="outlined"
                onClick={handleClick}
              >
                Excluir
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
