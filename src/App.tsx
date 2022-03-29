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

  &:hover {
    background-color: pink;
    color: red;
  }
`;

const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`;

interface LinkProps {
  className: string;
  href: string;
}

const Link: FC<LinkProps> = ({ className, ...props }) => {
  return <a className={className} {...props} />
}

const StyledLink = styled(Link)`
  color: blue;
`

function App() {
  return (
    <Content>
      <P>Hola</P>
      <Button primary>Buenas</Button>
      <BlockButton as="a" href="#">Grande</BlockButton>
      <Link className='hola' href='#'>Buenas</Link>
      <StyledLink className='hola' href='#'>Buenas</StyledLink>
    </Content>
  )
}

export default App
