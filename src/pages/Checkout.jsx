import { useState } from 'react';
import {
  Grid,
  Card,
  Box,
  CardContent,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import { formSchema, formInitialValues } from '../components/validations';
import CartTotal from '../components/CartTotal';
import { emptyCart } from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCartComponent from '../components/EmptyCart';
const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onAdd = async (values) => {
    const res = new Promise((res) => {
      setTimeout(() => {
        console.log('Form Values', values);
        res();
      }, 1500);
    });
    return res;
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: formInitialValues,
    validationSchema: formSchema,
    async onSubmit(values) {
      setLoading(true);
      await onAdd(values);
      dispatch(emptyCart());
      navigate('/thankyou');
      setLoading(false);
    },
  });

  if (cart.length === 0) {
    return <EmptyCartComponent />;
  }

  return (
    <Grid container mt={'70px'} spacing={4} px={3} mb={4}>
      <Grid item md={6} xs={12}>
        <CartTotal />
      </Grid>
      <Grid item md={6} xs={12}>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Form
                values={values}
                handleChange={handleChange}
                errors={errors}
                handleBlur={handleBlur}
                touched={touched}
                setFieldValue={setFieldValue}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  type='submit'
                  color='primary'
                  variant='contained'
                  disabled={loading}
                  startIcon={
                    loading ? (
                      <CircularProgress color='inherit' size={20} />
                    ) : undefined
                  }
                >
                  Order Now
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Checkout;
