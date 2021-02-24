import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FormikInput from '../../_helper/FormikInput';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { loginAction } from '../redux/Actions';




export default function Login() {
    const dispatch = useDispatch();

    const history = useHistory();
    const loginSchema = Yup.object().shape({

        email: Yup.string().required('Please Enter Email'),
        password: Yup.string().required("Password is required")

    })
    const [loading, setLoading] = React.useState(false)

    const location = useLocation();
    let link;

    if (location?.state?.link) {
        link = location?.state?.link;
    } else {
        link = "/";
    }

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}

            onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log('got', values)
                dispatch(loginAction(values?.email, values?.password, setLoading, history, link))

            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <>
                    <form onSubmit={handleSubmit}>
                        {console.log("errors", errors)}

                        <div className="login-color">
                            <div className="container">
                                <div className="row login">
                                    <div className="col-lg-3"></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1 className="text-center">Log In</h1>

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


                                        <button
                                            type="submit"

                                            className="btn btn-primary btn-block my-3"

                                        >
                                            Login
                                       </button>
                                        <div className="signup_option">
                                            <p>
                                                Don`t have account?
                                             <span onClick={() => history.push('/signup')} className="font-weight-bold ml-1 pointer">SIGNUP</span>
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </>
            )}
        </Formik>

    )


}
