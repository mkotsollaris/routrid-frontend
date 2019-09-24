import { Container } from "react-bootstrap";

export default function Home() {

    return <div>
        <iframe src='https://link.tink.com/1.0/pay/?client_id=2362c043b3e0417f9b9597f55a368460&redirect_uri=http://localhost:3000/callback/etransfer&market=SE&locale=en_GB&payment_request_id=5f235720-dab8-11e9-9c9f-7d65a64d4e49' height={'750px'} width={'100%'}/>
    </div>
}