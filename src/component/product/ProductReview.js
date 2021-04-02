import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
// import RatingReadOnly from '../../_helper/RatingReadOnly';
import { makeStyles } from '@material-ui/core';

import ReviewForm from './ReviewForm';



export default function ProductReview({productId,getSingleProductById}) {
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState("")
  const useStyles = makeStyles({
    writeReviewButton: {
      texAlign: 'end',
      padding:'10px'

    }
  })
  const classes = useStyles();
  const handleClickClose = () => {
    setOpen(false);
    setMsg("")
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <Row>
        <Col md={6} >
          <h3>Cutomer Review</h3>
        </Col>
      </Row>

      {/* <Row>
        <Col md={6} >
          <RatingReadOnly startPercent={75} ratingname="customer-review" color="#a6ce39" />
        </Col>
      </Row> */}
      <Row>
        <Col md={6} className={classes.writeReviewButton}>
          <Button onClick={handleClickOpen}>
            Write a Review
            </Button>
        </Col>
      </Row>
     
          <ReviewForm productId={productId} show={open} onHide={handleClickClose} handleClickClose={handleClickClose} msg={msg} setMsg={setMsg}  getSingleProductById={getSingleProductById}/>
       

       
       
        
       
     
    </>


  )
}
