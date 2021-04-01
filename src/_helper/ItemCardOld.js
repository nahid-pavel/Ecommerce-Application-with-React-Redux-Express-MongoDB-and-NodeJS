import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import WordLimit from 'react-word-limit';


export default function ItemCard({ link, name, description, imgSrc, price, rating }) {
    const history = useHistory();

    return (
        <Card className="my-3 p-3 rounded itemCard" onClick={() => history.push(link)} style={link ? { cursor: 'pointer' } : null}>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body>
                <Card.Title as='div'><strong>{name}</strong></Card.Title>
                <Card.Text as='div'>
                  <WordLimit limit={70}>{description}</WordLimit>
                </Card.Text>
                {/* {rating && <Rating />} */}
                <Card.Text as='h3'>{price} TK.</Card.Text>
                {rating?.value >= 0 ?<Rating readOnly size="small" name="simple-controlled" value={rating?.value} />: ''}


            </Card.Body>
        </Card>
    )
}
