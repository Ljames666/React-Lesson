import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const StyledMain = styled(Grid)(({ theme }) => ({
  height: '100%',
  width: '100%',
}));

export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}
