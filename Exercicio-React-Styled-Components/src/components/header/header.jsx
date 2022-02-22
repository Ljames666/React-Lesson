import react from 'react';
import StyledHeader from './styleds';
import NavBar from '../navBar/NavBar';

function Header() {
  return (
    <StyledHeader>
      <h1>Minha primeira página com React.</h1>
      <NavBar>oi</NavBar>
    </StyledHeader>
  );
}

export default Header;
