import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function ItemCard({ link, name, description, imgSrc, price, rating }) {
    const history = useHistory();
    return (
        <Card style={{ minHeight: '500px' }}>
            <Card.Img variant="top" src={imgSrc} onClick={() => history.push(link)} style={link ? { cursor: 'pointer' } : null} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                {/* {rating && <Rating />} */}
                <h2 variant="primary">{price} TK.</h2>


            </Card.Body>
        </Card>
    )
}
