//    AwesomeTitle.jsx

import StyledH1 from './styled';

const makeShadow = () => {
  let shadow = '';
  // eslint-disable-next-line no-plusplus
  for (let index = 1; index < 3 + 1; index++) {
    shadow += ` 
    ${((24 / 3) * index).toFixed(0)}px 
    ${((18 / 3) * index).toFixed(0)}px 
    4px rgba(91, 192, 190, 1) ${index !== 3 ? ',' : ' '} `;
  }
  return shadow;
};

export default function AwesomeTitle() {
  return (
    <StyledH1
      id="awesomeTitle"
      shadow={makeShadow()}
      textColor="rgba(111, 255, 233, 1)"
      textTransform="uppercase"
      align="center"
      fontFamily="Fredoka"
      size="50"
      bold={false}
    >
      What do I Eat?
    </StyledH1>
  );
}
