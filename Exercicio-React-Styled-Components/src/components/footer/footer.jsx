/* eslint-disable prettier/prettier */
import react from 'react';
import { RiFacebookCircleFill, RiTwitterFill, RiInstagramLine } from 'react-icons/ri';
import StyledFooter from './styleds';

function Footer() {
  return (
    <StyledFooter>
      <div className="divContainer">
        <h4>
          <span>About</span> . <span>Contact</span> . <span>Terms of Use</span> . {'   '}
          <span>Privacy Policy</span>
        </h4>

        <p> &copy; Your Website 2022. All Rights Reserved </p>
      </div>
      <div className="icons">
        <RiFacebookCircleFill className="pointer" />
        <RiTwitterFill className="pointer" />
        <RiInstagramLine className="pointer" />
      </div>
    </StyledFooter>
  );
}

export default Footer;
