import React from 'react';
import { Field, Formik } from 'formik';

import './payment.css';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setPaymentInfoActions } from '../../../../localStorageRedux/Actions';


export default function Payment({ setCurrentStep }) {
    const dispatch = useDispatch();
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
                    <Nav.Link onClick={() => setCurrentStep("three")}>Placeorder </Nav.Link>
                </Nav.Item>
            </Nav>

            <Formik
                enableReinitialize={true}
                initialValues={{ payment: "" }}
                // validationSchema={RegistrationSchema}

                onSubmit={(values) => {
                    dispatch(setPaymentInfoActions(values))

                }}
            >
                {({
                    values,
                    errors,
                  
                    
                    handleSubmit,
                    setFieldValue,
                  
                    /* and other goodies */
                }) => (
                    <>
                        {console.log(values)}

                        <form onSubmit={handleSubmit}>
                            {console.log("errors", errors)}

                            <div className="signup-3 justify-content-center mt-4">

                                <div className="container">
                                    <div className="row" >
                                        <div className="col-md-3"></div>
                                        <div className="col-md-6 justify-content-center mx-0 px-4 py-4" style={{ backgroundColor: "#f0f8ff" }}>
                                            <div className="form-group">
                                                <label className="font-weight-bold">
                                                    Select Payment Method
                                                </label><br />
                                                <Field
                                                    type="radio"
                                                    name="payment"

                                                    value="paypal"
                                                    onClick={(e) => {
                                                        setFieldValue("payment", e.target.value);

                                                    }}
                                                />
                                                <label htmlFor="paypal">Paypal or Credit Card</label>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <button
                                                        type="submit"
                                                        className="signup-page-btn1"
                                                        onClick={() => setCurrentStep("one")}


                                                    >
                                                        Back
                                           </button>

                                                </div>
                                                <div className="col">
                                                    <button
                                                        type="submit"
                                                        className="signup-page-btn1"
                                                        onClick={() => setCurrentStep("three")}


                                                    >
                                                        Next
                                           </button>
                                                </div>

                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </>
                )}
            </Formik>

        </>

    )
}
