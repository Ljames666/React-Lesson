import styled from 'styled-components';

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;

  width: 100%;
  color: #fff;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;
    h1 {
      transition: font-size 3s;
      :hover {
        font-size: 5rem;
      }
    }
  }
`;

export default StyledMain;
