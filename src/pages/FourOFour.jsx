import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, Button } from '@mui/material';
import NotFound from '../assets/not-found.png';

const FourOFour = () => {
  const navigate = useNavigate();
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
          <Typography variant='h4'>You have lost...</Typography>
          <Box
            sx={{
              width: 300,
              height: 300,
            }}
          >
            <img src={NotFound} style={{ width: '100%' }} />
          </Box>
          <Typography variant='h6' onClick={() => navigate('/')}>
            You have been lost ! Click here for homepage.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FourOFour;
