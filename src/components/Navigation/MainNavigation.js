import React from 'react';
import { Box, FormControl, OutlinedInput, InputAdornment, IconButton, Badge, Menu,MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    navigationIndex: {
        position: 'sticky',
        top: 0

    },
    boxContainer: {
        backgroundColor: 'green',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          padding: '10px',
        },
      },
    displayIcon: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }

    },
    logo: {
        margin: '0 5%',
        color: '#fff',
        fotWeight:600,
        fontSize:18,
        [theme.breakpoints.down('sm')]: {
            margin: '0 1%',
            fontSize:12,
        }

    },
    searchField: {
        flex: 1,
        margin:10,
        [theme.breakpoints.down('sm')]: {
             display:'block'
        }
        
    },
   
    outlined: {
        backgroundColor: '#fff'
    },
    customBadge: {
        backgroundColor: '#fff'
    },
    marginauto: {
        [theme.breakpoints.up('sm')]: {
          marginLeft: 150,
        },
        [theme.breakpoints.down('sm')]: {
          marginLeft: 10,
        },
      },
      marginRight: {
        marginRight: 10,
        [theme.breakpoints.up('sm')]: {
          marginRight: 10,
        },
        [theme.breakpoints.down('sm')]: {
          marginRight: 10,
        },
      },
      marginLeft: {
        [theme.breakpoints.up('sm')]: {
          marginLeft: 10,
          marginRight: 24,
        },
        [theme.breakpoints.down('sm')]: {
          marginLeft: 10,
        },
      },
    formControl:{
        padding:10,
        [theme.breakpoints.down('sm')]: {
        padding:0
        },
        '& .MuiOutlinedInput-input': {
            padding: '10px !important'
          },
        
    }


}))
const totalQuantity = 2;

export default function MainNavigation() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileOpen = (e) => {
        console.log(e.currentTarget, 'current')
        setAnchorEl(e.currentTarget);

    }
    const handleMenuClose = () => {
       
        setAnchorEl(null);

    }
    const menuId ='primary-menu-Id'
    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          getContentAnchorEl={null}
          style={{ zIndex: '9000000000000000' }}
          keepMounted
          
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          open={isMenuOpen}
          
     
     
          id={menuId}


        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>


        </Menu>
    )
    

    const classes = useStyles();
    return (
        <Box className={classes.navigationIndex}>
            <Box className={classes.boxContainer}>
                <Box className={classes.container}>
                    <Box className={classes.displayIcon}>
                        <MenuIcon />
                    </Box>
                    <Box className={classes.logo}>
                        PavelShop

                    </Box>
                    <Box className={classes.searchField}>
                        <FormControl fullWidth className={classes.formControl}>
                            <OutlinedInput className={classes.outlined} placeholder="What are you looking for? "
                                id="input-with-icon-adornment" endAdornment={<InputAdornment position="end">
                                    <SearchOutlinedIcon />
                                </InputAdornment>

                                } />
                        </FormControl>

                    </Box>
                    <Box   className={`${classes.marginauto} ${classes.marginRight}`} >
                        <IconButton aria-label="shopping cart" color="inherit">
                            <Badge badgeContent={totalQuantity} classes={{ badge: classes.customBadge }}>
                                <LocalMallIcon style={{ color: '#fff' }} />
                            </Badge>



                        </IconButton>
                    </Box>
                    <Box className={` ${classes.marginLeft}`}>
                        <IconButton edge="end" aria-label="account of current user"

                            aria-haspopup="true"
                            onClick={handleProfileOpen}
                            aria-controls={menuId}
                            color="inherit">


                            <AccountCircle style={{ fill: '#fff' }} />



                        </IconButton>
                        {renderMenu}

                    </Box>
                </Box>

            </Box>

        </Box>
    )
}
