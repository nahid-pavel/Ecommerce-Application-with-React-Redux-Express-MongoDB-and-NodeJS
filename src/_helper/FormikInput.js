import React from 'react';
import { Field } from 'formik';

const FormikInput = (props) => {
    const { value, name, type, placeholder, errors, touched } = props
    return (
        <Field
            {...props}
            value={value}
            name={name}
            type={type}
            placeholder={placeholder}



        />
    )
}
export default FormikInput;
