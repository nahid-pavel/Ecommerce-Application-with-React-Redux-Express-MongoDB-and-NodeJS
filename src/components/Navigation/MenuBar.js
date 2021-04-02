import React from 'react';
import {Drawer, makeStyles} from '@material-ui/core'


export default function MenuBar() {
    const useStyles = makeStyles({
        drawerPaper:{
            width:'90%'
        }
    })
    const classes = useStyles();
    return (
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      ></Drawer>
    )
}
