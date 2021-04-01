import React from 'react';
import { Button} from '@material-ui/core';

import { DropzoneDialogBase } from 'material-ui-dropzone';
import { FormHelperText } from '@material-ui/core';




export const FileDrop = (props) => {

    const { setOpen, open, fileObjects, name, setFileObjects,setFieldValue,error } = props;


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
                    setFieldValue("image","")
                }}
                onClose={() => setOpen(false)}
                onSave={() => {
                    console.log('onSave', fileObjects);
                    setFieldValue("image",fileObjects[0].file.name ? fileObjects[0].file.name: "")
                    setOpen(false);
                }}
                showPreviews={true}
                showFileNamesInPreview={true}
              
            />
              {error && <FormHelperText style={{ color: 'red', marginLeft: '14px' }}>{error}</FormHelperText>}
            

        </>
    );
};
