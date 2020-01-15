import styled, { css } from 'styled-components';

const Button = styled.button`
  height: 80px;
  width: 220px;
  background-color: red;
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: uppercase;
  transition: 1s;
  border: none;
  border-radius: 50px;
  padding: 20px;
  box-sizing: content;
  &:hover {
    background-color: #ff0000;
    color: white;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: blue;
      width: 110px;
      height: 60px;
      font-size: 0.6rem;
    `}
`;

export default Button;
