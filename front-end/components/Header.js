import {useState} from 'react';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from './Logo';
import '../styles/header.css';
import Singup from './Signup';

export default function Header(props) {
  
  const [renderSingup, setRenderSignup] = useState(false);

  function logoutClick() {
    setRenderSignup(true);
  }

  if(renderSingup) {
    location.reload();
  }

  return <Container>
    <Navbar expand="lg">
      <Navbar.Brand className="mr-auto">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Button variant="light" onClick={() => { logoutClick() }}>Logout</Button>
          <Form inline>
            <StyledButton variant="outline-success">Profile</StyledButton>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>

}

const StyledForm = styled(Form)`
`

const StyledButton = styled(Button)`
  &&&{
    background-color: #ECCA6B;
    border-color: #ECCA6B;
    color: white;    
    margin-right: .5rem;
  };
  ${StyledForm}:hover &&& {
    background-color: white;
    color: #A940A2;
  }
`
