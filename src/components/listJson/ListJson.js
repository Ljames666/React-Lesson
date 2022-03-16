import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

export default function ListJson() {
  const data = useSelector((state) => state.listPhone);
  return (
    <>
      <Typography sx={{ marginTop: '15px' }}>JSON</Typography>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  );
}
