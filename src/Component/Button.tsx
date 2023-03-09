import React from 'react';
import styled, { css } from 'styled-components';
import IButton from '../interfaces/Button';

const ButtonSize = css`
  
`

const StyledButton = styled.button<{ color?: string; background?: string }>`
  color: ${(prop) => prop.color || '#1A1A1A'};
  background: ${(prop) => prop.background || '#FFFFFF'};
  cursor: pointer;

  font-family: 'Noto Sans';
  font-weight: 700;
  font-size: 20px;
  border: 0;
`

const Button: React.FC<IButton> = ({children, color, background, onClick}) => {
  return(
    <StyledButton color={color} background={background} onClick={onClick}>{children}</StyledButton>
  )
}

export default Button;