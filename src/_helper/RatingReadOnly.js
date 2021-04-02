import React,{useState,useEffect} from 'react';
import {Rating} from '@material-ui/lab';
import {makeStyles} from '@material-ui/core';

export default function RatingReadOnly({startPercent,ratingName,color}) {

    const [value,setValue]=useState(2);
    const useStyles= makeStyles({
        rating:{
            '& .MuiRating-icon':{
                color: `${color ? color :''}`
            }
        }
    })

    const classes = useStyles();

    useEffect(()=>{
        if(startPercent > 80){
            setValue(5)
        }else if(startPercent > 60){
            setValue(4.5)
        }else if(startPercent > 40){
            setValue(3.5)
        }else if (startPercent > 20){
            setValue(2.5)
        }else if (startPercent > 0){
            setValue(1)
        }else{
            setValue(0)
        }

    },[startPercent])

  return  <Rating name={ratingName} value={value} className={classes.rating}  readOnly />
}
