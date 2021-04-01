import React from 'react'
import { Form, FormControl } from 'react-bootstrap';

import './header.css';

export default function SearchBox({placeholder, paginationSearchHandler,setFieldValue,fieldValue, setIsEmpty,values} ) {
    
    return (
        <Form inline className="input-group">
            <FormControl type="text" value={fieldValue} placeholder={placeholder} className="py-2  mr-1 pr-5" style={{ width: '90%' }} onChange={(e)=>{
                setFieldValue(e.target.value);
                console.log(e.target.value)
                if(e.target.value.length ===0){
                   setIsEmpty(true)
                }else{
                    paginationSearchHandler(e.target.value)
                    setIsEmpty(false)
                }
               
            }} />
            <span className="input-group-append">
                <button className="btn rounded-pill border-0 ml-n5" type="button" style={{zIndex:999}} onClick={()=>paginationSearchHandler(fieldValue,values)}>
                    <i className="fa fa-search"></i>
                </button>
            </span>

        </Form>
    )
}
