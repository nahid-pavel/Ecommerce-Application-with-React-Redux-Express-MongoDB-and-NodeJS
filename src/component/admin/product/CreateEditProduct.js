import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { FileDrop } from '../../../_helper/FileDrop';
import { createProduct, getSingleProductById, uploadImages, updateProduct } from './helper';
import Loading from '../../../_helper/Loading';
import { Alert } from 'react-bootstrap';
import { TextField, Grid, Box, Paper, Button } from '@material-ui/core';
import { Formik } from 'formik';
import { useSelector, shallowEqual } from "react-redux";
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SearchSelect from '../../../_helper/SearchSelect';





const useStyles = makeStyles({
    gridContainer: {

        padding: '5px !important'

    }
})




export default function CreateEditProduct() {

    const classes = useStyles();
    const history = useHistory();
    const [fileObjects, setFileObjects] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState(false);
    const [singleData, setSingleData] = React.useState("");

    const { id } = useParams();



    const initData = {
        name: "",
        description: "",
        price: "",
        countInStock: "",
        brand: "",
        category: "",
        image: ""
    }
    const categoryDDL =[{value:'Electronics',label:'Electronics'},{value:'Smartphone',label:'Smartphone'}]
    const brandDDL =[{value:'Apple',label:'Apple'},{value:'Logitech',label:'Logitech'}]
   

    const { profileData } = useSelector(
        (state) => state?.auth,
        shallowEqual
    );

    useEffect(() => {
        if (id) {

            getSingleProductById(id, setSingleData, setLoading)
        }
        if (fileObjects.length > 0) {
            console.log(fileObjects[0].file.name)
        }

    }, [id, fileObjects])


    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        description: Yup.string().required('Description is required'),
        price: Yup.number().required('Price is required').min(1),
        countInStock: Yup.number().required('Quantity is required').min(1),
      
        image:  Yup.string().required('Image is required'),
        category: Yup.object().shape({
            label: Yup.string().required("Category is required"),
            value: Yup.string().required("Category is required"),
          }),
          brand: Yup.object().shape({
            label: Yup.string().required("Brand is required"),
            value: Yup.string().required("Brand is required"),
          }),


    })


    return (

        <Formik
            enableReinitialize={true}
            initialValues={id ? singleData : initData}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
                console.log(values,'values')

                const {
                    name,
                    price,
                    description,

                    brand,
                    category,
                    countInStock,
                } = values



                const uploadedImage = await uploadImages(fileObjects);
                const payload = {
                    user: profileData?._id,
                    name,
                    price,
                    description,
                    image: uploadedImage[0] || values?.image,
                    brand,
                    category,
                    countInStock,

                }
                if (id) {
                    console.log(payload, 'got payload from edit');
                    console.log(values, 'got values from edit')
                    updateProduct(id, {...payload,category:category?.label,brand:brand?.label},setLoading, setMessage)
                } else {
                    createProduct({...payload,category:category?.label,brand:brand?.label}, setLoading, setMessage, () => resetForm(initData))

                }


            }}
        >
            {({ handleSubmit, resetForm, errors, values, setFieldValue }) => (

                <>
                    { loading && <Loading />}
                    {console.log(values)}
                    {console.log(errors,'errors')}
                    <form onSubmit={handleSubmit}>


                        <Grid container spacing={3} style={{ marginTop: '5px' }} >

                            {message && <Alert variant="success">{message}</Alert>}



                            <Grid item sm={12}>
                                <Box px={{ xs: 12 }} className={classes.gridContainer}>

                                    <Grid container xs={12} spacing={3} component={Paper}>
                                        <Grid item xs={12}>
                                            <div className="form-card-heading">
                                                <p>

                                                    {id ? "Edit Product" : "Create Product"}

                                                </p>
                                                <div>
                                                    <button
                                                        type="button"
                                                        onClick={() => history.goBack()}
                                                        className="btn btn-light back-btn mr-2"
                                                    >
                                                        <i className="fa fa-arrow-left mr-1"></i>
                                                        {"Back"}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => resetForm(initData)}
                                                        className="btn btn-light reset-btn mr-2"
                                                    >
                                                        {"Reset"}
                                                    </button>

                                                </div>

                                            </div>
                                        </Grid>
                                        <Grid item xs={12} >
                                            <label>Product Name *</label><br />
                                            <TextField

                                                name="name"
                                                value={values?.name}
                                                onChange={(e) => setFieldValue("name", e.target.value)}

                                                variant="outlined"
                                                fullWidth
                                                error={!!errors.name}
                                                helperText={errors?.name}

                                            />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <label>Description *</label><br />
                                            <TextField
                                                value={values?.description}
                                                onChange={(e) => setFieldValue("description", e.target.value)}

                                                name="description"
                                                variant="outlined"
                                                fullWidth
                                                multiline
                                                rows={4}
                                                error={!!errors.description}
                                                helperText={errors?.description}

                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <label>Price *</label><br />
                                            <TextField
                                                value={values?.price}
                                                onChange={(e) => setFieldValue("price", e.target.value)}
                                                type="number"
                                                name="price"
                                                variant="outlined"
                                                fullWidth
                                                error={!!errors.price}
                                                helperText={errors?.price}

                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <label>Quantity</label>
                                            <TextField
                                                type="number"
                                                value={values?.countInStock}
                                                onChange={(e) => setFieldValue("countInStock", e.target.value)}
                                                name="countInStock"
                                                variant="outlined"
                                                fullWidth
                                                error={!!errors.countInStock}
                                                helperText={errors?.countInStock}

                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <label>Brand</label>
                                            <SearchSelect 
                                               options ={brandDDL}
                                              
                                               value={values?.brand}
                                               setFieldValue={setFieldValue}
                                               error={!!errors?.brand?.value}
                                               helperText={errors?.brand?.value}
                                               name="brand"
                                               fullWidth={true}
                                             


                                             />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <label>Category</label>
                                            <SearchSelect 
                                               options ={categoryDDL}
                                               value ={values?.category}
                                               setFieldValue={setFieldValue}
                                               error={!!errors.category?.value}
                                               helperText={errors?.category?.value}
                                               fullWidth={true}
                                               name="category"


                                             />
                                            {/* <TextField
                                                value={values?.category}
                                                onChange={(e) => setFieldValue("category", e.target.value)}
                                                name="category"
                                                variant="outlined"
                                                fullWidth
                                                error={!!errors.category}
                                                helperText={errors?.category}

                                            /> */}
                                        </Grid>

                                        <Grid item xs={12} className=" d-flex">
                                            <FileDrop
                                                name="image"
                                                setFieldValue={setFieldValue}
                                                fileObjects={fileObjects}
                                                setFileObjects={setFileObjects}
                                               
                                                open={open}
                                                setOpen={setOpen}
                                                onClick={() => setOpen(true)}

                                                accept="image/jpeg, image/png"
                                                multiple
                                                error={errors?.image}
                                            />
                                          

                                            
                                                {fileObjects.length === 1 && (
                                                    <div className=" d-flex ml-2" >
                                                    <span>
                                                        <p>

                                                            {fileObjects[0].file.name}
                                                        </p>

                                                    </span>
                                                     <span className="ml-2"style={{cursor:'pointer'}} onClick={()=>{
                                                        const newData = fileObjects.filter(
                                                            (item) => item.file.name !== fileObjects[0].file.name
                                                        )
                                                        setFileObjects(newData) 
                                                        setFieldValue("image","")

                                                     }}>

                                                        X
                                                    

                                                 </span>
                                                 </div>


                                                )}
                                              

                                          
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box display="flex" justifyContent="flex-start">

                                                <Button
                                                    type="submit"
                                                    name="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    disableElevation
                                                >
                                                    {id ? 'Edit Product' : 'Add Product'}
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>



                    </form>
                </>
            )}
        </Formik>

    )
}
