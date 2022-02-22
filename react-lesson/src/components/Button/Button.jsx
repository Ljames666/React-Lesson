import React from 'react';
import { ButtonStyle } from './styled';
export function Button(props) {
  return <ButtonStyle {...props.color} />;
}
