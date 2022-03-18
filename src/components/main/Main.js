import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const StyledMain = styled(Grid)(({ theme }) => ({}));

export default function Main({ children }) {
  return <StyledMain item>{children}</StyledMain>;
}
