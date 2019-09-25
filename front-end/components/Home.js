import '../styles/home.css';
import { Container, Row } from 'react-bootstrap';
import Header from './Header'

export default function Home() {

    return <Container>
        <Row>
            <Header />
        </Row>
        <div className="text-align-center">
            <iframe  src='https://link.tink.com/1.0/pay/?client_id=2362c043b3e0417f9b9597f55a368460&redirect_uri=http://localhost:3000/callback/etransfer&market=SE&locale=en_GB&payment_request_id=5f235720-dab8-11e9-9c9f-7d65a64d4e49&iframe=true' height={'750px'} width={'100%'} />
        </div>
    </Container>
}