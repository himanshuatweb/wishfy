import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import OrderPhoto from '../assets/thankyou.png';

const Thankyou = () => {
  return (
    <Grid container mt={'70px'} spacing={4} mb={4}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <Typography variant='h4'>THANK YOU</Typography>
          <Box
            sx={{
              width: 300,
              height: 300,
            }}
          >
            <img src={OrderPhoto} style={{width:'100%'}} />
          </Box>
            <Typography variant='h6'>
              Your order has been received. Please check you email for more
              details
            </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Thankyou;
