import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import Transaction from './Transaction';
import PIS from './PIS';

export default function Beneficiary() {

    const [proceedClicked, setOnProceedClIck] = useState(false);

    function onProceedClick() {
        setOnProceedClIck(true);
    }

    if (proceedClicked) {
        return <PIS/>
    }

    return <div>
        <h1>Add Beneficiary: </h1>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Label>Amount</Form.Label>
                <Form.Control type="amount" placeholder="Enter amount" />
                <Form.Label>IBAN</Form.Label>
                <Form.Control type="amount" placeholder="IBAN" />
                <Form.Text className="text-muted">
                    We'll never share your information with anyone else.
                </Form.Text>
            </Form.Group>
        </Form>
        <Button onClick={()=> onProceedClick()}>Proceed</Button>
    </div>
}
