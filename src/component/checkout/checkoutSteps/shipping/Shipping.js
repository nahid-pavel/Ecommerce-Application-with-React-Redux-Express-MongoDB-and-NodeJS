import React from 'react';
import { Formik } from 'formik';
import './shipping.css';
import FormikInput from '../../../../_helper/FormikInput';
import Select from 'react-select';
import { useSelector, shallowEqual } from "react-redux";
import { useDispatch } from 'react-redux';
import './shipping.css';
import { Nav } from 'react-bootstrap';
import { setShippingInfoActions } from '../../../../localStorageRedux/Actions';


export default function Shipping({ setCurrentStep }) {
    const cartItems = useSelector((state) => state?.localStorage?.cartItems, shallowEqual);
    const dispatch = useDispatch();
    return (
        <>
            <Nav className="justify-content-center mb-4">
                <Nav.Item>
                    <Nav.Link style={{ color: 'green' }} onClick={() => setCurrentStep("one")}>Shipping</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setCurrentStep("two")}>Payment</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setCurrentStep("three")}>Placeorder </Nav.Link>
                </Nav.Item>
            </Nav>
            <Formik
                enableReinitialize={true}
                initialValues={{ address: "", city: "", postalCode: "", country: "" }}
                // validationSchema={RegistrationSchema}

                onSubmit={(values, { setSubmitting }) => {
                    dispatch(setShippingInfoActions(values));

                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <>
                        {console.log(values)}

                        <form onSubmit={handleSubmit}>
                            {console.log("errors", errors)}

                            <div className="justify-content-center mt-4">
                                <div className="container">
                                    <div className="row" >
                                        <div className="col-md-3"></div>
                                        <div className="col-md-6 mx-0 px-4 py-4" style={{ backgroundColor: "#f0f8ff" }}>

                                            <div className="form-group">
                                                <label className="font-weight-bold">
                                                    Address
                                                </label>
                                                <FormikInput
                                                    type="text"
                                                    className="form-control"
                                                    value={values?.address}
                                                    placeholder="Address"
                                                    errors={errors}
                                                    touched={touched}
                                                    name="address"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-bold">City</label>
                                                <FormikInput
                                                    type="text"
                                                    className="form-control"
                                                    value={values.city}
                                                    placeholder="City"
                                                    errors={errors}
                                                    touched={touched}
                                                    name="city"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-bold">Postal Code</label>
                                                <FormikInput
                                                    type="number"
                                                    className="form-control"
                                                    value={values?.postalCode}
                                                    placeholder="Postal Code"
                                                    errors={errors}
                                                    touched={touched}
                                                    name="postalCode"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-bold">Country</label>
                                                <Select
                                                    name="country"
                                                    value={values?.country}
                                                    options={[{ value: 1, label: "Bangladesh" }]}
                                                    onChange={(v) => setFieldValue("country", v)}



                                                />
                                            </div>


                                            <button
                                                type="submit"
                                                className="signup-page-btn1"
                                                onClick={() => setCurrentStep("two")}
                                                disabled={!values?.address || !values?.city || !values?.postalCode || !values?.country}


                                            >
                                                Next
                                           </button>

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
