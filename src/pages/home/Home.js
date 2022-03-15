import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import HomeMain from '../../components/main/Main';

import AwesomeTitle from '../../components/title/AwesomeTitle';
import { setNumber } from '../../store/ListPhoneSlice';

function Home() {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: undefined,
    phone: undefined,
    email: undefined,
    city: undefined,
  });

  function handleClick() {
    dispatch(setNumber(data));
    setData({
      name: '',
      phone: '',
      email: '',
      city: '',
    });
  }

  function handleChange(e) {
    switch (e.target.id) {
      case 'name':
        setData({
          name: e.target.value,
          phone: data.phone,
          email: data.email,
          city: data.city,
        });
        break;
      case 'phone':
        setData({
          name: data.name,
          phone: e.target.value,
          email: data.email,
          city: data.city,
        });
        break;
      case 'email':
        setData({
          name: data.name,
          phone: data.phone,
          email: e.target.value,
          city: data.city,
        });
        break;
      case 'city':
        setData({
          name: data.name,
          phone: data.phone,
          email: data.email,
          city: e.target.value,
        });
        break;
      default:
        break;
    }
  }

  console.log('data======', data);
  return (
    <HomeMain>
      <AwesomeTitle />

      <Stack spacing={2} direction="column" sx={{ margin: '0 10px' }}>
        <TextField
          id="name"
          label="Name:"
          variant="filled"
          color="success"
          focused
          onChange={handleChange}
          fullWidth
          sx={{
            '& .css-4yhz0i-MuiInputBase-root-MuiFilledInput-root': {
              color: '#25e668',
            },
          }}
        />
        <TextField
          id="phone"
          label="Phone Number:"
          variant="filled"
          color="success"
          focused
          onChange={handleChange}
          fullWidth
          sx={{
            '& .css-4yhz0i-MuiInputBase-root-MuiFilledInput-root': {
              color: '#25e668',
            },
          }}
        />
        <TextField
          id="email"
          label="E-mail"
          variant="filled"
          color="success"
          focused
          onChange={handleChange}
          fullWidth
          sx={{
            '& .css-4yhz0i-MuiInputBase-root-MuiFilledInput-root': {
              color: '#25e668',
            },
          }}
        />
        <TextField
          id="city"
          label="City:"
          variant="filled"
          color="success"
          focused
          onChange={handleChange}
          fullWidth
          sx={{
            '& .css-4yhz0i-MuiInputBase-root-MuiFilledInput-root': {
              color: '#25e668',
            },
          }}
        />

        <Button onClick={handleClick} variant="outlined" color="success">
          SAVE
        </Button>
      </Stack>
    </HomeMain>
  );
}

export default Home;
