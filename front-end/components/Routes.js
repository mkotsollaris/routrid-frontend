import { Button } from 'react-bootstrap';
import { useState } from 'react';
import TransactionSuccess from './TransactionSuccess';
import AppContext from '../context/AppContext';

export default function Routes() {
    const appContext = React.useContext(AppContext);

    function onProceedClick() {
        appContext.onSuccessRouteSelection();
    }

    return <div >
        <img className="width-100" src="../static/images/route1.mmd.svg" />
        <Button onClick={() => onProceedClick()}>Proceed</Button>
    </div>
}
