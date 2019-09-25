import '../styles/home.css';
import { Container, Row, Button } from 'react-bootstrap';
import Header from './Header'
import styled from 'styled-components';
import Transaction from './Transaction';
import { useState } from 'react';

export default function PIS() {

  const [proceedClicked, setOnProceedClIck] = useState(false);

  function onProceedClick() {
    setOnProceedClIck(true);
  }

  if (proceedClicked) {
    return <Transaction />
  }

  return <Container>
    <div className="text-align-center">
      <iframe src='https://link.tink.com/1.0/pay/?client_id=2362c043b3e0417f9b9597f55a368460&redirect_uri=http://localhost:3000/callback/etransfer&market=SE&locale=en_GB&payment_request_id=5f235720-dab8-11e9-9c9f-7d65a64d4e49&iframe=true' height={'750px'} width={'100%'} />
    </div>
    <Button onClick={() => onProceedClick() }>Proceed</Button>
  </Container>
}
