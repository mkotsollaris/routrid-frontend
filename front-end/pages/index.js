import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import  { VerificationProvider } from '../context/VerificationContext';
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Singup from '../components/Signup';
import Dropdown from '../components/Dropdown';
import Transaction from '../components/Transaction';
import dynamic from 'next/dynamic'
import EmbedID from 'trulioo-react/EmbedID';
const Graph = dynamic(
  () => import('../components/Graph'),
  { ssr: false }
)
const Home = dynamic(
  () => import('../components/Home'),
  { ssr: false }
)

const GlobalStyle = createGlobalStyle`
  p {
    font-family: "Roboto Light ,Times New Roman", Times, serif;
  }
`

export default function Index() {
  const [currentUser, setCurrentUser] = useState();

  function handleResponse(e) {
    console.log('response', e);
    setCurrentUser('Menelaos');
  }

  if (currentUser) {
    return <div>
      <Home name={currentUser} />
    </div>
  }

  return <div>
    <Transaction/>
  </div>

  // return (
  //   <VerificationProvider value={{}}>
  //     <Container>
  //       <GlobalStyle />
  //       <Row>
  //         <Header />
  //       </Row>
  //       <Head>
  //         <title>routrid</title>
  //       </Head>
  //       <Row>
  //         <Singup handleResponse={handleResponse} />
  //       </Row>
  //     </Container>
  //   </VerificationProvider>
  // );
}
