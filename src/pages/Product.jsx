import { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Box,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { addToCart } from '../redux/slices/cartSlice';
import Loading from '../components/Loading';
import UserRating from '../components/UserRating';

const fetchSingleProducts = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};

const Product = () => {
  const { id } = useParams();
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});

  const { isLoading, data } = useQuery(['get-single-products-by-id', id], () =>
    fetchSingleProducts(id)
  );

  useEffect(() => {
    if (!isLoading) {
      setProduct(data);
    }
  }, [isLoading]);

  console.log('product ', product);

  const checkIfAlreadyPresent = (product) => {
    let present = false;
    cart.forEach((cartItem) => {
      if (cartItem.id === product.id) {
        present = true;
      }
    });
    return present;
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Grid container mt={'80px'} px={3} spacing={4} mb={5}>
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
            onClick={() => navigate(-1)}
            mb={2}
          >
            Back
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia
            sx={{
              height: 300,
              objectFit: 'cover',
              width: '100%',
            }}
            image={product?.image}
            title={product?.title}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        <Card
          sx={{
            minHeight: 300,
            position: 'relative',
          }}
        >
          <CardContent>
            <Typography variant='h6'>{product?.title}</Typography>
            <Typography variant='subtitle2' my={2}>
              Price : ${product?.price}
            </Typography>
            <Typography sx={{ fontWeight: 600 }}>Description</Typography>
            <Typography variant='subtitle2'> {product?.description}</Typography>
          </CardContent>

          <CardActions>
            <Chip
              sx={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
              }}
              label={`Category: ${product?.category}`}
            />
            <Button
              sx={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
              }}
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
      </Grid>
      <Grid item xs={12}>
        <UserRating />
      </Grid>
    </Grid>
  );
};

export default Product;
