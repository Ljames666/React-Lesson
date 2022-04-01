import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { v4 } from 'uuid';
import HomeMain from '../../components/main/Main';

import AwesomeTitle from '../../components/title/AwesomeTitle';
import { addContact, resetAllContact } from '../../store/ListPhoneSlice';
import { fecthGeoLocationIp, geoLocationIpSelector } from '../../store/geoLocIpSlice';
import { fecthVerifyPhone, phoneSelector } from '../../store/verifyPhoneSlice';
import { fecthSeachCep, seachCepSelector } from '../../store/seachCepSlice';

function Home() {
  const dispatch = useDispatch();

  const geoLocationIpRedux = useSelector(geoLocationIpSelector);
  const phoneRedux = useSelector(phoneSelector);
  const cepRedux = useSelector(seachCepSelector);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    dispatch(fecthGeoLocationIp());
  }, []);

  useEffect(() => {
    dispatch(fecthVerifyPhone(phone));
    dispatch(fecthSeachCep(cep));
  }, [phone, cep]);

  useEffect(() => {
    setData({
      id: v4(),
      name,
      phone: phoneRedux,
      email,
      cep: cepRedux,
    });
  }, [phoneRedux, name, email, cepRedux]);

  function handleClickSave() {
    dispatch(addContact(data));
    setName('');
    setPhone('');
    setEmail('');
    setCep('');
  }
  function handleClickRemove() {
    dispatch(resetAllContact());
  }

  return (
    <HomeMain>
      <AwesomeTitle />

      <Stack spacing={1} direction="column" sx={{ margin: '0 10px' }}>
        <TextField
          id="name"
          label="Name:"
          variant="filled"
          color="success"
          focused
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{
            '& .css-4yhz0i-MuiInputBase-root-MuiFilledInput-root': {
              color: '#25e668',
            },
          }}
        />
        <TextField
          id="cep"
          label="Zip-code:"
          variant="filled"
          color="success"
          focused
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          fullWidth
          sx={{
            '& .css-4yhz0i-MuiInputBase-root-MuiFilledInput-root': {
              color: '#25e668',
            },
          }}
        />

        <Button onClick={handleClickSave} variant="outlined" color="success">
          SAVE
        </Button>
        <Button onClick={handleClickRemove} variant="outlined" color="error">
          RESET ALL PHONE LIST
        </Button>
      </Stack>
    </HomeMain>
  );
}

export default Home;
