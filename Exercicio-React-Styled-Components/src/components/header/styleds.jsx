import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: Column;
  justify-content: space-between;
  align-items: center;

  height: 35rem;
  width: 100%;

  h1 {
    margin-top: 8rem;
    font-size: 2.5rem;
    color: #ffff;
    transition: font-size 5s, color 5s, transform 5s;

    :hover {
      font-size: 3rem;
      color: #535356;
      transform: rotate(360deg);
    }
  }
`;

export default StyledHeader;
