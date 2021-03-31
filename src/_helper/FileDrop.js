import React from 'react';
import {Button} from '@material-ui/core';

import { DropzoneDialogBase } from 'material-ui-dropzone'




export const FileDrop = (props) => {
 
  const { setOpen,open,fileObjects,name,setFileObjects } = props;
  

  return (
      <>
    <Button variant="contained" onClick={() => setOpen(true)}>Add {name}</Button>
        
    <DropzoneDialogBase

    acceptedFiles={['image/*']}
    fileObjects={fileObjects}
    cancelButtonText={"cancel"}
    submitButtonText={"submit"}
    maxFileSize={5000000}
    open={open}
    onAdd={newFileObjs => {

        setFileObjects([].concat(newFileObjs));
    }}
    onDelete={(deleteFileObj) => {
        const newData = fileObjects.filter(
            (item) => item.file.name !== deleteFileObj.file.name
        )
        setFileObjects(newData)
    }}
    onClose={() => setOpen(false)}
    onSave={() => {
        console.log('onSave', fileObjects);
        setOpen(false);
    }}
    showPreviews={true}
    showFileNamesInPreview={true}
/>

    
     </>
  );
};
