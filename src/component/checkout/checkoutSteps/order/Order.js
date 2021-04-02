import React from 'react';
import { useParams } from 'react-router-dom';

export default function Order() {
    const { id } = useParams();

    return (
        <div>
            <h1>Order Id : {id}</h1>
        </div>
    )
}
