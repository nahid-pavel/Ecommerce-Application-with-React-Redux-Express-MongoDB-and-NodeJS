import { Formik } from 'formik'
import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import FormikInput from '../../_helper/FormikInput';
import { getUserProfile, updateUserProfile } from './helper';
import { useSelector, shallowEqual } from "react-redux";

import { useDispatch } from 'react-redux';
import { getUserProfileActions } from '../../auth/redux/Actions';




export default function Profile() {

    const dispatch = useDispatch()




    const [message, setMessage] = React.useState('');
    const [singleData, setSingleData] = React.useState("");
   
    const { profileData } = useSelector((state) => state?.auth, shallowEqual);
    console.log('profileData', profileData?._id)



    useEffect(() => {

        if (profileData?._id) {
            getUserProfile(setSingleData);
            console.log(singleData, 'single')

        }
        return () => setSingleData("");


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profileData, setSingleData])


    const getUserProfileById = () => {
        dispatch(getUserProfileActions())
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps

    return (
        <>

            <Formik
                enableReinitialize={true}
                initialValues={singleData}
                // validationSchema={RegistrationSchema}

                onSubmit={(values) => {
                    updateUserProfile(values, setMessage, getUserProfileById)

                }}
            >
                {({
                    values,
                    errors,
                    touched,
                  
                    handleSubmit,
                   
                    /* and other goodies */
                }) => (
                    <>
                        {console.log(values)}
                        {message.length > 0 && <Alert variant={'success'}>
                            {message}
                        </Alert>}
                        <form onSubmit={handleSubmit}>
                            {console.log("errors", errors)}

                            <div className="profile mt-4">
                                <div className="container">
                                    <div className="row">

                                        <div className="col-lg-4">
                                            <div>
                                                <h1 className="text-center">User Profile</h1>

                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-bold">
                                                    Name
                                                </label>
                                                <FormikInput
                                                    type="text"
                                                    className="form-control"
                                                    value={values?.name}
                                                    placeholder="Enter Name"
                                                    errors={errors}
                                                    touched={touched}
                                                    name="name"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-bold">Email</label>
                                                <FormikInput
                                                    type="text"
                                                    className="form-control"
                                                    value={values.email}
                                                    placeholder="Enter Email"
                                                    errors={errors}
                                                    touched={touched}
                                                    name="email"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-bold">Password</label>
                                                <FormikInput
                                                    type="password"
                                                    className="form-control"
                                                    value={values?.password}
                                                    placeholder="Enter Password"
                                                    errors={errors}
                                                    touched={touched}
                                                    name="password"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-bold">Confirm Password</label>
                                                <FormikInput
                                                    type="password"
                                                    className="form-control"
                                                    value={values?.confirmPassword}
                                                    placeholder="Confirm Password"
                                                    errors={errors}
                                                    touched={touched}
                                                    name="confirmPassword"
                                                />
                                            </div>

                                            <button
                                                type="submit"

                                                className="btn btn-primary btn-block my-3"

                                            >
                                                Update
                                           </button>

                                        </div>
                                        <div className="col-lg-8">
                                            <h2 className="text-center">Your Orders</h2>
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
