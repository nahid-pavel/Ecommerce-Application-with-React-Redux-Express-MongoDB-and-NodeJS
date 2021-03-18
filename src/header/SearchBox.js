import React from 'react'
import { Form, FormControl } from 'react-bootstrap';

import './header.css';

export default function SearchBox() {
    return (
        <Form inline className="input-group">
            <FormControl type="text" placeholder="Enter your keyword" className="py-2  mr-1 pr-5" style={{ width: '90%' }} />
            <span className="input-group-append">
                <button className="btn rounded-pill border-0 ml-n5" type="button" style={{zIndex:999}}>
                    <i className="fa fa-search"></i>
                </button>
            </span>

        </Form>
    )
}
