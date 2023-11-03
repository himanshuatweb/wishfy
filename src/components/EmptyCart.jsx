import React from 'react';
import { Box, Typography } from '@mui/material';
import EmptyCartImg from '../assets/empty-cart.png';

const EmptyCart = () => {
  return (
    <Box
      sx={{
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h4'>Empty Cart</Typography>
      <Box
        sx={{
          width: 300,
          height: 300,
        }}
      >
        <img src={EmptyCartImg} style={{ width: '100%' }} />
      </Box>
      <Typography variant='h6'>
        Add something to give your cart it's meaning...
      </Typography>
    </Box>
  );
};

export default EmptyCart;
