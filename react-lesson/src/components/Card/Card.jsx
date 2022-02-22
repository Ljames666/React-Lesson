import React from 'react';
import './style.css';
import { CardStyle } from './styled';
import { Button } from '../Button/Button';
function Card(props) {
  return (
    <CardStyle>
      <p>{props.texto}</p>
      <h4>{props.titulo}</h4>
      <Button color="primary">azul</Button>
      <Button color="green">verde</Button>
    </CardStyle>
  );
}

export { Card };
