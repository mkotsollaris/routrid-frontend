import { useState } from 'react';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import '../styles/header.css';
import AppContext from '../context/AppContext';

export default function Header() {

  const appContext = React.useContext(AppContext);
  const { isLoggedIn } = appContext;
console.log('isloged',isLoggedIn)
  const [renderSignup, setRenderSignup] = useState(false);

  function logoutClick() {
    setRenderSignup(true);
  }

  if (renderSignup) {
    location.reload();
  }
  
  const rightMostMenuItem = isLoggedIn ? <Navbar.Collapse id="basic-navbar-nav">
    <Nav>
      <Button variant="light" onClick={() => { logoutClick() }}>Logout</Button>
      <Form inline>
        <StyledButton variant="outline-success">Profile</StyledButton>
      </Form>
    </Nav>
  </Navbar.Collapse> : null;

  return <Container>
    <Navbar expand="lg">
      <Navbar.Brand className="mr-auto">
        <img src="../static/images/routrid-transparent.png"></img>
      </Navbar.Brand>
      {rightMostMenuItem}
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
