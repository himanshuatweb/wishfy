import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  //   console.log('cart ', cart);

  const checkIfAlreadyPresent = (product) => {
    let present = false;
    cart.forEach((cartItem) => {
      if (cartItem.id === product.id) {
        present = true;
      }
    });
    return present;
  };

  return (
    <Card
      sx={{
        height: 330,
        position: 'relative',
      }}
    >
      <CardMedia
        sx={{ height: 160 }}
        image={product?.image}
        title={product?.title}
      />
      <CardContent>
        <Rating name='ratings' value={product?.rating?.rate} readOnly />
        <Typography gutterBottom variant='subtitle2' component='div'>
          {product?.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Price ${product?.price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: 'absolute',
          bottom: '0px',
          right: '10px',
        }}
      >
        <Button
          size='small'
          variant='contained'
          onClick={() => {
            navigate(`/products/${product.id}`);
          }}
        >
          View
        </Button>

        <Button
          variant='contained'
          size='small'
          onClick={() => {
            //first check if already added or not
            const check = checkIfAlreadyPresent(product);
            if (!check) {
              dispatch(addToCart({ ...product, qty: 1 }));
              enqueueSnackbar('Added To Cart', {
                variant: 'success',
              });
            } else {
              enqueueSnackbar('Product Already Added', {
                variant: 'error',
              });
            }
          }}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
