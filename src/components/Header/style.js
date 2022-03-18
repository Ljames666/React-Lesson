import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 12vh;
  background-color: #000000;
  border-bottom: 0.3rem solid #b3b2b2;
  color: #23a6d5;
  padding: 0.5rem;
  margin-bottom: 0.2rem;
  .icon {
    font-size: 3rem;
    margin: 1rem;
  }
  div {
    h1 {
      margin-right: 2rem;
      padding-right: 2rem;
      font-family: 'Patrick Hand', cursive;
    }
  }
`;
export default StyledHeader;
