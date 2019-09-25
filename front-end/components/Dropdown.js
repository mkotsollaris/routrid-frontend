import { Dropdown as BDropdown } from 'react-bootstrap';
import { useState } from 'react';

export default function Dropdown(props) {
    const [selectedValue, setSelectedValue] = useState("Price");

    return <BDropdown>
        <BDropdown.Toggle id="dropdown-basic">
            {selectedValue}
        </BDropdown.Toggle>
        <BDropdown.Menu>
            <BDropdown.Item onClick={() => setSelectedValue("Price")}>Price</BDropdown.Item>
            <BDropdown.Item onClick={() => setSelectedValue("Time")}>Time</BDropdown.Item>
            <BDropdown.Item onClick={() => setSelectedValue("Downtime")}>Downtime</BDropdown.Item>
        </BDropdown.Menu>
    </BDropdown>
}