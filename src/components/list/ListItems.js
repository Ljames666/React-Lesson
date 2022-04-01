import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Modal from '@mui/material/Modal';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';

import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';

import { selectAll, updateContact, removeContact } from '../../store/ListPhoneSlice';
import { fecthVerifyPhone, phoneSelector } from '../../store/verifyPhoneSlice';
import { fecthSeachCep, seachCepSelector } from '../../store/seachCepSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ListItemContact() {
  const dispatch = useDispatch();
  const data = useSelector(selectAll);
  const phoneRedux = useSelector(phoneSelector);
  const cepRedux = useSelector(seachCepSelector);

  const [open, setOpen] = useState({ open: false, type: undefined });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [newData, setNewData] = useState({});

  useEffect(() => {
    dispatch(fecthVerifyPhone(phone));
    dispatch(fecthSeachCep(cep));
  }, [phone, cep]);

  useEffect(() => {
    setNewData({
      id: data.id,
      name: !name ? data.name : name,
      phone: !phone ? data.phone : phoneRedux,
      email: !email ? data.email : email,
      cep: !cep ? data.cep : cepRedux,
    });
  }, [phoneRedux, name, email, cepRedux, data]);

  const handleOpen = (op, ty) => setOpen({ open: op, type: ty });
  const handleClose = () => setOpen({ open: false, type: undefined });
  function handleClickSave(idItem) {
    dispatch(updateContact({ idItem, changed: { newData } }));
    setName('');
    setPhone('');
    setEmail('');
    setCep('');
    setOpen({ open: false, type: undefined });
  }
  function handleClickRemove(id) {
    dispatch(removeContact(id));
    setOpen({ open: false, type: undefined });
  }

  return (
    <>
      <Typography sx={{ margin: '15px' }}>Contacts</Typography>
      {data.map((item) => {
        return (
          <Card
            sx={{ maxWidth: 350, backgroundColor: '#080b0d', marginBottom: '20px' }}
            elevation={12}
          >
            <CardHeader
              sx={{ color: '#25e668', marginBottom: '-40px' }}
              avatar={
                <Avatar sx={{ backgroundColor: '#25e668' }} aria-label="recipe">
                  {item.name.substr(0, 2)}
                </Avatar>
              }
              title={item.name}
            />

            <CardContent>
              <List sx={{ width: '100%', marginBottom: '-40px' }}>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon sx={{ color: '#25e668' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography sx={{ fontSize: '12px', color: '#25e668' }}>
                      Phone: {item.phone.country.prefix} {item.phone.format.local}
                    </Typography>
                    <Typography sx={{ fontSize: '12px', color: '#25e668' }}>
                      Type: {item.phone.type}
                    </Typography>
                    <Typography sx={{ fontSize: '12px', color: '#25e668' }}>
                      Carrier: {item.phone.carrier}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AlternateEmailIcon sx={{ color: '#25e668' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography sx={{ fontSize: '12px', color: '#25e668' }}>
                      E-mail: {item.email}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HomeIcon sx={{ color: '#25e668' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography sx={{ fontSize: '12px', color: '#25e668' }}>
                      Zip-code: {item.cep.cep}
                    </Typography>
                    <Typography sx={{ fontSize: '12px', color: '#25e668' }}>
                      Address: {item.cep.logradouro}. {item.cep.bairro}. {item.cep.cidade}-
                      {item.cep.estado}. {item.phone.country.name}
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </CardContent>
            <CardActions spacing={2}>
              <Button onClick={() => handleOpen(true, 'upDate')} variant="outlined" color="success">
                UPDATE
              </Button>
              <Button onClick={() => handleOpen(true, 'delete')} variant="outlined" color="error">
                DELETE
              </Button>
            </CardActions>
            <Modal
              open={open.open}
              onClose={() => handleClose()}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {open.type === 'upDate' ? (
                  <Stack spacing={2} direction="column" sx={{ margin: '0 10px' }}>
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

                    <Button
                      onClick={() => handleClickSave(item.id)}
                      variant="outlined"
                      color="success"
                    >
                      SAVE
                    </Button>
                    <Button onClick={() => handleClose()} variant="outlined" color="error">
                      CANCEL
                    </Button>
                  </Stack>
                ) : (
                  <>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Do you want to delete the contact !
                    </Typography>
                    <Button
                      onClick={() => handleClickRemove(item.id)}
                      variant="outlined"
                      color="error"
                    >
                      CONFIRM
                    </Button>
                    <Button onClick={() => handleClose()} variant="outlined" color="primary">
                      CANCEL
                    </Button>
                  </>
                )}
              </Box>
            </Modal>
          </Card>
        );
      })}
    </>
  );
}
