import React from 'react';
import { Field } from 'formik';
import FormikError from "./FormikError";

const FormikInput = (props) => {
    const { value, name, type, placeholder, errors, touched } = props
    return (
        <>
            <Field
                {...props}
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}




            />
            <FormikError errors={errors} touched={touched} name={name} />
        </>
    )
}
export default FormikInput;
