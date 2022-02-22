import styled from 'styled-components';

export const ButtonStyle = styled.div`
  width: 200px;
  // eslint-disable-next-line no-undef
  background-color: ${(props) => (props.color = 'primary' ? 'blue' : 'green')};
  color: #fff;
  border-radius: 6px;
  padding: 10px;
  margin: 10px;
`;
