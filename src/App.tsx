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
  fontSize?: any;
  color?: string;
  className?: string;
}
export const ButtonComponent: FC <ButtonProps> = ({children, ...rest }) => {
  return (
    <button {...rest}>{children}</button>
  )
}

const Button = styled(ButtonComponent)`
  background-color: ${props => props.primary ? 'red' : 'white'};
`;

function App() {
  return (
    <Content>
      <P>Hola</P>
      <Button primary={false}>Buenas</Button>
    </Content>
  )
}

export default App
