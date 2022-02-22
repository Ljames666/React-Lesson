import styled from 'styled-components';

const StyledFooter = styled.div`
  height: 5rem;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ebebf4;
  color: #fff;
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #23a6d5;
    font-size: 1.8rem;
    .pointer {
      :hover {
        cursor: pointer;
      }
    }
  }
  .divContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    color: #23a6d5;
    span {
      :hover {
        cursor: pointer;
      }
    }
    p {
      font-size: 0.7rem;
      color: #626465;
    }
  }
`;

export default StyledFooter;
