import {
  Grid,
  Card,
  Box,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart, deleteFromCart } from '../redux/slices/cartSlice';
import CartTotal from '../components/CartTotal';
import EmptyCart from '../components/EmptyCart';

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateItem = (incDec, item) => {
    let cloneObj = { ...item };
    if (incDec === 'inc') {
      cloneObj = {
        ...cloneObj,
        qty: cloneObj.qty + 1,
      };
      return cloneObj;
    } else {
      cloneObj = {
        ...cloneObj,
        qty: cloneObj.qty > 1 ? cloneObj.qty - 1 : cloneObj.qty,
      };
      return cloneObj;
    }
  };

  if (cart.length <= 0) {
    return <EmptyCart />;
  }

  return (
    <Grid container mt={'70px'} px={3} spacing={3} mb={3}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant='outlined'
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            mb={2}
          >
            Home
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          {cart.length > 0
            ? cart.map((item) => {
                return (
                  <Grid item xs={12} key={item?.id} mb={2}>
                    <Card sx={{ minWidth: '350px' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          position: 'relative',
                        }}
                      >
                        <CardMedia
                          image={item?.image}
                          sx={{ height: 200, minWidth: 150 }}
                        />

                        <Box p={3}>
                          <Typography variant='subtitle2'>
                            {item.title}
                          </Typography>

                          <Typography variant='subtitle2'>
                            Price ${item.price}
                          </Typography>

                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <IconButton
                              aria-label='decrease'
                              onClick={() => {
                                const updatedValue = updateItem('dec', item);
                                dispatch(updateCart(updatedValue));
                              }}
                            >
                              <RemoveCircleOutlineIcon />
                            </IconButton>

                            <Typography variant='subtitle2'>
                              Qty. {item?.qty}
                            </Typography>

                            <IconButton
                              aria-label='increase'
                              onClick={() => {
                                const updatedValue = updateItem('inc', item);
                                dispatch(updateCart(updatedValue));
                              }}
                            >
                              <AddCircleOutlineIcon />
                            </IconButton>
                          </Box>

                          <Button
                            sx={{
                              position: 'absolute',
                              right: '10px',
                              bottom: '10px',
                            }}
                            variant='outlined'
                            startIcon={<DeleteIcon />}
                            onClick={() => dispatch(deleteFromCart(item?.id))}
                          >
                            Remove
                          </Button>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                );
              })
            : null}
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <CartTotal />
      </Grid>
    </Grid>
  );
};

export default Cart;
