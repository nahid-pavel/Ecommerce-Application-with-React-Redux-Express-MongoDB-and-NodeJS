import { Rating } from '@material-ui/lab';
import React from 'react';
import { Formik } from 'formik';
import { Row, Col, Button, Alert, Modal } from 'react-bootstrap';
import FormikInput from '../../_helper/FormikInput';
import { DropzoneDialogBase } from 'material-ui-dropzone'
import * as Yup from 'yup';
import {   submitReview, uploadImages } from './helper';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Loading from '../../_helper/Loading';




export default function ReviewForm({ show, onHide,msg,setMsg,productId,handleClickClose,getSingleProductById }) {
    const [rating, setRating] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [fileObjects, setFileObjects] = React.useState([]);
    const [loading,setLoading] = React.useState(false)
    const history = useHistory();
    

    const validationSchema = Yup.object().shape({
        comment: Yup.string().required('Comment is required')
    });

    const profile = useSelector(state=> state?.auth?.profileData);

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Your Review</Modal.Title>
            </Modal.Header>

         <Modal.Body>
             {loading && <Loading />}
            <Formik
                enableReinitialize={true}
                initialValues={{ comment: '' }}
                validationSchema={validationSchema}
                onSubmit={async(values) => {
                    if (!rating) {
                        setMsg('Please give a rating');
                      
                    } else {
                       
                       const uploadedImage =await  uploadImages(fileObjects)
                      const payload ={
                          comment: values?.comment,
                          name: profile?.name,
                          rating: rating,
                          imageUrl:uploadedImage[0],
                          user:profile?._id

                      }
                     const res = await submitReview(productId,payload);
                     console.log('got response',res)
                     if(res?.success === false){
                         if(res?.message==="Not authorized, token failed"){
                            setLoading(true)
                            setMsg("Please Login to Review");
                           
                            setTimeout(function () {
                                history.push('/login');
                              }, 2000);
                         }else{
                             setMsg(res?.message);
                             
                             setTimeout(function () {
                                handleClickClose();
                               setRating(0);
                              }, 2000);
                         }

                     }else{
                        getSingleProductById();
                        handleClickClose();
                        setMsg("");
                        setRating(0);

                     }
                      
                    }

                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleSubmit,

                    /* and other goodies */
                }) => (
                    
                    <form onSubmit={handleSubmit}>
                       
                        {msg && <Alert variant={'danger'}>
                            {msg}
                        </Alert>}
                        <Rating
                            value={rating}
                            max={5}
                            precision={0.5}
                            name="rating"
                            onChange={(event, newValue) => setRating(newValue)}
                        />

                        <Row>
                            <Col md={12} className="mt-4">
                                <label>Review *</label>
                                <FormikInput
                                    type="text"
                                    className="form-control"
                                    value={values?.comment}
                                    placeholder="Enter Comment"
                                    errors={errors}
                                    touched={touched}
                                    name="comment"



                                />
                            </Col>

                        </Row>
                        <Row>
                            <Col className="mt-4">
                                <Button onClick={() => setOpen(true)}>Add Files</Button>
                            </Col>
                        </Row>
                        <DropzoneDialogBase

                            acceptedFiles={['image/*']}
                            fileObjects={fileObjects}
                            cancelButtonText={"cancel"}
                            submitButtonText={"submit"}
                            maxFileSize={5000000}
                            open={open}
                            onAdd={newFileObjs => {

                                setFileObjects([].concat(newFileObjs));
                            }}
                            onDelete={(deleteFileObj) => {
                                const newData = fileObjects.filter(
                                    (item) => item.file.name !== deleteFileObj.file.name
                                )
                                setFileObjects(newData)
                            }}
                            onClose={() => setOpen(false)}
                            onSave={() => {
                                console.log('onSave', fileObjects);
                                setOpen(false);
                            }}
                            showPreviews={true}
                            showFileNamesInPreview={true}
                        />
                       
                        <Modal.Footer>
                        <Button
                            type="submit"
                            variant={"primary"}


                            onSubmit={() => handleSubmit()}
                        > Submit</Button>

                        </Modal.Footer>
                        





                    </form>
                )}
            </Formik>
            </Modal.Body>
        </Modal>




    )
}
