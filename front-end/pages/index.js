import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import '../components/SignupComponent'
import Header from '../components/Header';
import SearchFrontPage from '../components/SearchFrontPage'
import RightImageFrontPage from '../components/RightImageFrontPage'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Singup from '../components/Signup';

const GlobalStyle = createGlobalStyle`
  p {
    font-family: "Roboto Light ,Times New Roman", Times, serif;
  }
`
const Index = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const onClick = () => setCurrentUser('Marat');
  return (

    <Container>
      <GlobalStyle />
      <Head>
          <title>routrid</title>
      </Head>
        <Row>
          <Header UserName={currentUser} onClick={onClick}/>
        </Row>
        <Row>
          <Singup></Singup>
        </Row>  
      </Container>
  );
}

const FirstRow = styled(Row)`
    background-image: url('/static/images/hompage_image_one.svg');
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 24%;
    padding-right: 0;
  `;

  const BottomRowTitle = styled(Row)`
    background-color: #ECECFA;
  `;

  const FeaturedSpacesTitle = styled.p`
    color: #A940A2;
    font-size: 2rem;
    text-align: center;
    margin-top: -50%
  `;

  const BottomRow = styled(Row)`
    background-color: #ECECFA;
    
  `;

  const FeaturedSpaces = styled.p`
    background-image: url('/static/images/rooms.svg');
    background-repeat: no-repeat;
    padding: 15%;
    background-position: center;  
    margin-top: -14%;
  `;

export default Index;