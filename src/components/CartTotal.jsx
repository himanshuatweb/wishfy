import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const CartTotal = () => {
  const { cart } = useSelector((state) => state.cart);

  const getTotal = useCallback(() => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.price * item.qty;
    });
    return total;
  }, [cart]);

  if (cart.length === 0) {
    return null;
  }

  return (
    <Card p={4}>
      <CardContent>
        <Typography variant='h6' textAlign='center'>
          Order Summary
        </Typography>
        {cart.length > 0 &&
          cart.map((item) => {
            return (
              <List
                key={item.id}
                sx={{ width: '100%', bgcolor: 'background.paper' }}
              >
                <ListItem alignItems='flex-start'>
                  <ListItemAvatar>
                    <Avatar alt={item.name} src={item.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component='span'
                          variant='body2'
                          color='text.primary'
                        >
                          Sub Total{' '}
                        </Typography>
                        ${(item.price * item.qty).toFixed(2)}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant='inset' component='li' />
              </List>
            );
          })}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Typography variant='h6'>Total ${getTotal().toFixed(2)}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartTotal;
