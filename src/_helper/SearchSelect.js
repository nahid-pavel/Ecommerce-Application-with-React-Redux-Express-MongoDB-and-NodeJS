import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


export default function SearchSelect({options,setFieldValue,value,helperText,error,fullWidth,name}) {
   
    return (
        <Autocomplete
        id="combo-box-demo"
        options={options}
        getOptionLabel={(option) => option.label}
        renderOption={(option) => <span>{option.label}</span>}
        fullWidth={fullWidth}
        style={{width: `${!fullWidth && '300px'}` }}
        renderInput={(params) => <TextField {...params}   error={error} value={value} variant="outlined" helperText={helperText} />}
        onChange={(_,data) => {
            setFieldValue(name, data?.label);
            if(data===null){
                setFieldValue(name, "");
            }
        }}
        name={name}
      />
        
    )
   
      
}
// SearchSelect.defaultProps = {
//     // color: "#EF5350",
//     fullWidth: false,
//   };
