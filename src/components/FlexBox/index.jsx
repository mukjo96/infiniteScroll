import React from 'react';
import styled from 'styled-components';

const StyledFlexBox = styled.div`
  display: flex;
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  align-items: ${({ alignItems }) => alignItems || 'center'};
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
`;

function FlexBox(props) {
  return <StyledFlexBox {...props}>{props.children}</StyledFlexBox>;
}

export default FlexBox;
