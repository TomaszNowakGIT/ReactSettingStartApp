import styled, { css } from 'styled-components';


const Button = styled.button`
  height: 80px;
  width: 220px;
  background-color:${({backgroundColor}) =>  backgroundColor || 'green'}; //jeżeli brak koloru załaduj domyślny
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: uppercase;
  transition: 0.8s;
  border: 3px solid red;
  border-radius: 50px;
  padding: 20px;
  &:hover {
    background-color: #ff0000;
    color: white;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      color:white;
      background-color: blue;
      width: 110px;
      height: 60px;
      font-size: 0.6rem;
      border:none;
    `}
`;

export default Button;
