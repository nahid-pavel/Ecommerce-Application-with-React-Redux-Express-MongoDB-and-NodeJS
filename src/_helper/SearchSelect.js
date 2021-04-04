import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';




export default function SearchSelect({options,setFieldValue,value,helperText,error,fullWidth,name}) {
    console.log(value?.value)
    value=options.find(v => v?.value === value?.value) || {}
    console.log(value,'be')
   
    return (
        <Autocomplete
        id="combo-box-demo"
        options={options}
         value={options.find(v => v?.value === value?.value) || {}}
        getOptionLabel={(option) => option?.label}
        getItemValue={(option) => option.value}
        renderOption={(option) => <span>{option?.label}</span>}
        fullWidth={fullWidth}
        style={{width: `${!fullWidth && '300px'}` }}
        renderInput={(params) => <TextField {...params}   error={error} variant="outlined" helperText={helperText} />}
        onChange={(_,data) => {
            setFieldValue(name, data);
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
