import { AiOutlineLaptop } from 'react-icons/ai';
import StyledHeader from './style';
// import NavBar from '../navBar/NavBar';

function Header() {
  return (
    <StyledHeader>
      <div className="icon">
        <AiOutlineLaptop />
      </div>
      <div>
        <h1>dB MASTER INSTITUTE </h1>
      </div>
    </StyledHeader>
  );
}

export default Header;
