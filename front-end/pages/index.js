import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import { AppProvider } from '../context/AppContext';
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import Singup from '../components/Signup';
import dynamic from 'next/dynamic'
import Beneficiary from '../components/Beneficiary';
import TransactionSuccess from '../components/TransactionSuccess';
const Graph = dynamic(
  () => import('../components/Graph'),
  { ssr: false }
)
const PIS = dynamic(
  () => import('../components/PIS'),
  { ssr: false }
)

const GlobalStyle = createGlobalStyle`
  p {
    font-family: "Roboto Light ,Times New Roman", Times, serif;
  }
`

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [renderSuccess, setOnRenderSuccess] = useState(false);

  function onSuccessRouteSelection() {
    //TODO
    setOnRenderSuccess(true)
  }

  function handleResponse(e) {
    setIsLoggedIn(true);
  }

  if(renderSuccess) {
    return <AppProvider value={{ isLoggedIn, onSuccessRouteSelection }}>
    <Container>
      <GlobalStyle />
      <Row>
        <Header />
      </Row>
      <Head>
        <title>routrid</title>
      </Head>
      <TransactionSuccess/>
    </Container>
  </AppProvider>
  }

  if (isLoggedIn) {
    return <div>
      <AppProvider value={{ isLoggedIn, onSuccessRouteSelection }}>
        <Container>
          <GlobalStyle />
          <Row>
            <Header />
          </Row>
          <Head>
            <title>routrid</title>
          </Head>
          <Beneficiary />
        </Container>
      </AppProvider>

    </div>
  }

  return (
    <AppProvider value={{ isLoggedIn }}>
      <Container>
        <GlobalStyle />
        <Row>
          <Header />
        </Row>
        <Head>
          <title>routrid</title>
        </Head>
        <Row>
          <Singup handleResponse={handleResponse} />
        </Row>
      </Container>
    </AppProvider>
  );
}
