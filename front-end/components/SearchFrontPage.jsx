import { Container, Row, Col, FormControl, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';

const SearchFrontPage = () => (
  <Container>
    <Row>
      <Header/>
    </Row>
    <Row>
      <StyledParagraph>There's a <b>nook</b> in New York City for you</StyledParagraph>
    </Row>
    <Row>
      <Col sm={8}>
        <InputGroup>        
          <StyledFormControl
            placeholder="Search neighbourhood"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Col>
      <Col sm={4}/>
      
    </Row>
  </Container>
);

const StyledParagraph = styled.p`
  margin-left: 42px;
`;

const Header = styled.a`
  background-image: url('/static/images/homepage-header.svg');
  background-size: contain;
  background-repeat: no-repeat;
  padding: 64px 250px;
  background-position: left;
  margin-left: 20px;
`;

const StyledFormControl = styled(FormControl)`
  margin-left: 25px;
  border-color: #ECCA6B
`
export default SearchFrontPage;