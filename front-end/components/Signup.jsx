import {useEffect} from 'react';
import EmbedID from "trulioo-react/EmbedID";
import '../styles/signup.css';
import { Row } from 'react-bootstrap';
import Logo from "./Logo";
import * as d3 from "d3";
import "d3";

export default function Singup(props) {

    function handleResponse(e) {        
        props.handleResponse(e);
    }

    return <div>
        <Row className="justify-content-center">
            <h1>Create Account</h1>  
        </Row>
        <Row>
            <EmbedID url='http://localhost:3111' handleResponse={handleResponse} />
        </Row>
    </div>
}
