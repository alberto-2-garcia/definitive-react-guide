import { FC } from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-size: 24px;
  color: red;
`;

const Content = styled.div`
  padding: 20px 25px;
`;

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => !props.primary ? 'red' : 'white'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;

  :hover {
    background-color: lighten(${props => props.primary ? 'red' : 'white'});
  }
`;

const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`

function App() {
  return (
    <Content>
      <P>Hola</P>
      <Button primary>Buenas</Button>
      <BlockButton>Grande</BlockButton>
    </Content>
  )
}

export default App
