import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from './Logo';
import StyledNavLink from './StyledNavLink';
import SignupComponent from './SignupComponent';

const Header = (props) => (

  <Container>
    <Navbar expand="lg">
      <Navbar.Brand>
        <Logo/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Navbar>
  </Container>
);

const StyledForm = styled(Form)`
`

const StyledButton = styled(Button)`
  &&&{
    background-color: #ECCA6B;
    border-color: #ECCA6B;
    color: white;    
  };
  ${StyledForm}:hover &&& {
    background-color: white;
    color: #A940A2;
  }
`

export default Header;
