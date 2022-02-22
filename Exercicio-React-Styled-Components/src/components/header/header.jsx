import react from 'react';
import { RiComputerLine, RiStackLine, RiCheckboxCircleLine } from 'react-icons/ri';

import StyledHeader from './styleds';
import NavBar from '../navBar/NavBar';

function Header() {
  return (
    <StyledHeader>
      <h1>Minha primeira página com React.</h1>
      <NavBar>
        <div>
          <RiComputerLine className="wrapper" />
          <h2>Somente para desktop</h2>
          <p>Vamos aprender, como utilizar um framework.</p>
        </div>
        <div>
          <RiStackLine className="wrapper" />
          <h2>Criado com componentes</h2>
          <p>Utilizamos o Styled Components.</p>
        </div>
        <div>
          <RiCheckboxCircleLine className="wrapper" />
          <h2>Fácil aproveitamento</h2>
          <p>Estamos no caminho.</p>
        </div>
      </NavBar>
    </StyledHeader>
  );
}

export default Header;
