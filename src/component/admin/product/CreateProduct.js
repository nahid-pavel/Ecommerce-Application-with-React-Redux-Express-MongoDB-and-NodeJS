import {  TextField,Grid,Box,Paper,Button} from '@material-ui/core';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { FileDrop } from '../../../_helper/FileDrop';


const useStyles = makeStyles({
    gridContainer:{
     
           padding:'5px !important'
       
    }
})


export default function CreateProduct() {

    const classes = useStyles();
    const history = useHistory();
    const [fileObjects, setFileObjects] = React.useState([]);
    const [open,setOpen]=React.useState(false);
    
    const initData = {
        name: "",
        description: "",
        price: "",
        quantity: "",
        brand: "",
        image:""
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        description: Yup.string().required('Description is required'),
        price: Yup.number().required('Price is required').min(1),
        quantity: Yup.number().required('Quantity is required').min(1),
        brand: Yup.string().required('Brand is required'),


    })


    return (

        <Formik
            enableReinitialize={true}
            initialValues={initData}
            validationSchema={validationSchema}
            onSubmit={(values) => {

                console.log(values,'got file objects')
            }}
        >
            {({ handleSubmit, resetForm,  errors, values ,setFieldValue}) => (
              
                <>
                    {console.log(errors)}
                    <form onSubmit={handleSubmit}>
                    
                     
                     <Grid container spacing={3} style={{ marginTop: '5px' }} >
                    
                               
                               
                           

                            <Grid item sm={12}>
                            <Box px={{ xs: 12 }}  className={classes.gridContainer}>
                              
                                <Grid container  xs={12} spacing={3}  component={Paper}>
                                <Grid item xs={12}> 
                                <div className="form-card-heading">
                                <p>
                                   
                                           Create Product
                                          
                                </p>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => history.goBack()}
                                        className="btn btn-light back-btn mr-2"
                                    >
                                        <i className="fa fa-arrow-left mr-1"></i>
                                        { "Back"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => resetForm(initData)}
                                        className="btn btn-light reset-btn mr-2"
                                    >
                                        { "Reset"}
                                    </button>
                                    
                                </div>
                               
                            </div>
</Grid>
                                <Grid item xs={12} >
                                       <label>Product Name *</label><br />
                                       <TextField
                                           
                                            name="name"
                                            value={values?.name}
                                            onChange={(e)=>setFieldValue("name",e.target.value)}
                                           
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
                                            onChange={(e)=>setFieldValue("description",e.target.value)}
                                         
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
                                        onChange={(e)=>setFieldValue("price",e.target.value)}
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
                                            value={values?.quantity}
                                            onChange={(e)=>setFieldValue("quantity",e.target.value)}
                                            name="quantity"
                                            variant="outlined"
                                            fullWidth
                                            error={!!errors.quantity}
                                            helperText={errors?.quantity}
                  
                                          />
                                    </Grid>
                                    <Grid item xs={12}>
                                    <label>Brand</label>
                                    <TextField
                                       value={values?.brand}
                                       onChange={(e)=>setFieldValue("brand",e.target.value)}
                                      
                                       name="brand"
                                       variant="outlined"
                                        fullWidth
                                        error={!!errors.brand}
                                         helperText={errors?.brand}
                  
                                   />
                                    </Grid>
                                    
                                    <Grid item xs={12}>
                                     <FileDrop
                                        name="Image"
                                        fileObjects={fileObjects}
                                        setFileObjects={setFileObjects}
                                        open={open}
                                        setOpen={setOpen}
                                        onClick={()=>setOpen(true)}

                                        accept="image/jpeg, image/png"
                                        multiple
                                        error={errors?.files?.message}
                                      />
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
                                            Add Product
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
