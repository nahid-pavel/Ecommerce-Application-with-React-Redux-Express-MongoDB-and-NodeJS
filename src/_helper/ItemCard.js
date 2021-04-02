import { Box, Typography, Card, CardActionArea, CardMedia } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';



const style = makeStyles((theme) => ({
    imageContainer: {
      width: 260,
      height: 'auto',
      [theme.breakpoints.down('sm')]: {
        width: 142,
      },
      [theme.breakpoints.between('sm', 'sm')]: {
        width: 160,
      },
    },
    singleImage: {
      width: 260,
      height: 171,
      overflow: 'hidden',
      objectFit: 'contain',
      [theme.breakpoints.down('sm')]: {
        width: 142,
        height: 95,
      },
      [theme.breakpoints.between('sm', 'sm')]: {
        width: 160,
        height: 107,
      },
    },
    lineThrough: {
      fontSize: '12px !important',
      textDecoration: 'line-through',
      marginRight: 12,
    },
    icon: {
      fontSize: 14,
    },
    starRatingCount: {
      fontSize: 12,
    },
    card: {
      borderRadius: '4px !important',
    },
    productName: {
      color: theme.palette.common.black,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
  }));
  

export default function ItemCard({product}) {

    const root = style();
    
    return (
      
        
         
            <Box
              key={product?._id}
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              flexDirection="column"
              px={1}
              my={2}
              className={root.imageContainer}>
              <Link to={`/products/${product?._id}`}>
                <Card className={root.card}>
                  <CardActionArea>
                    <CardMedia component="img" alt={product?.name} image={product?.image} title={product?.name} />
                  </CardActionArea>
                </Card>
              </Link>
              <Link to={`/products/${product?._id}`}>
                <Typography className={root.productName}>{product?.name}</Typography>
              </Link>

              <Box display="flex" alignItems="center">
                <Typography display="inline" >
                  {product?.price} Tk.
                </Typography>
              
              </Box>
              <Box display="flex" alignItems="center">
                <Box mr="12px">
                   <Rating readOnly size="small" name="simple-controlled" value={product?.rating} />
                </Box>
                <Typography className={root.starRatingCount}>{product?.rating}</Typography>
              </Box>
            </Box>
         
      
      
    )
}


