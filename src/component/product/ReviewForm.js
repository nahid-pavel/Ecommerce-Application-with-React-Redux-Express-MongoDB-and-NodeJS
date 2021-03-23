import { Rating } from '@material-ui/lab';
import React from 'react';
import { Formik } from 'formik';
import { Row, Col, Button, Alert, Modal } from 'react-bootstrap';
import FormikInput from '../../_helper/FormikInput';
import { DropzoneDialogBase } from 'material-ui-dropzone'
import * as Yup from 'yup';
import { uploadImages } from './helper';







export default function ReviewForm({ show, onHide,msg,setMsg }) {
    const [rating, setRating] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [fileObjects, setFileObjects] = React.useState([]);
    

    const validationSchema = Yup.object().shape({
        comment: Yup.string().required('Comment is required')
    })
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Your Review</Modal.Title>
            </Modal.Header>

          <Modal.Body>
            <Formik
                enableReinitialize={true}
                initialValues={{ comment: '' }}
                validationSchema={validationSchema}
                onSubmit={async() => {
                    if (!rating) {
                        setMsg('Please give a rating');
                      
                    } else {
                       
                       const uploadedImage =await  uploadImages(fileObjects)
                       console.log(uploadedImage)
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
