import { Row,Col,Image} from 'react-bootstrap'
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import IViewModal from './IViewModal';


export default function SeeReviews({ reviews }) {
    const [show,setShow] = React.useState(false);



    

      return  reviews ? (reviews?.map(review => {
            return (
                
                    <div key={review._id}  className="product_review my-3">
                        <Row>
                            <Col><Rating readOnly size="small" name="simple-controlled" value={review.rating} /></Col>
                        </Row>
                        <Row>
                            <Col><p>By <span>{review?.name}</span></p></Col>
                        </Row>
                        <Row>
                            <Col><p><span>{review?.comment}</span></p></Col>
                        </Row>
                        {review?.imageUrl && (
                 
                     
                        <Row>
                            <Col xs={6} md={4} className="my-2" >
                               <Image src={review?.imageUrl} alt="review image" onClick={()=>setShow(true)}   style={{border: '2px solid grey',cursor:'pointer'}} fluid  />
                            </Col>
                         
                        </Row>
                     
                          )}   
                        <Row>
                            <Col md={12} className="borderOne"></Col>
                        </Row>
                        <IViewModal show={show} onHide={() => setShow(false)}>
                            <Image src={review?.imageUrl} alt="review image"  />
                        </IViewModal>
                        
                    </div>
                
            )
        })): null




}
