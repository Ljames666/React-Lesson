import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { selectAll, addContact, resetAllContact } from '../../store/ListPhoneSlice';

export default function ListJson() {
  const data = useSelector(selectAll);
  return (
    <>
      <Typography sx={{ marginTop: '12px' }}>JSON</Typography>
      <pre style={{ fontSize: '12px' }}>{JSON.stringify(data, null, 4)}</pre>
    </>
  );
}
