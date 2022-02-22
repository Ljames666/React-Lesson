import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import { StyledMain, GlobalStyle } from './styleds';

function DefaultLayout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}

export default DefaultLayout;
