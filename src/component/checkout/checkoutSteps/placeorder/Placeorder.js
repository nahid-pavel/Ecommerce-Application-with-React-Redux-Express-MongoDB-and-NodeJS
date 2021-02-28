import React from 'react';
import { Nav } from 'react-bootstrap';

export default function Placeorder({ setCurrentStep }) {
    return (
        <>
            <Nav className="justify-content-center mb-4">
                <Nav.Item>
                    <Nav.Link style={{ color: 'green' }} onClick={() => setCurrentStep("one")}>Shipping</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{ color: 'green' }} onClick={() => setCurrentStep("two")}>Payment</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{ color: 'green' }} onClick={() => setCurrentStep("three")}>Placeorder </Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <h3>Placeholder</h3>
            </div>
        </>
    )
}
