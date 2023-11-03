import React from 'react';
import { Grid, Card, Typography, Rating, Box } from '@mui/material';

const ratingArray = [
  {
    id: 1,
    username: 'Sam',
    review:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    rating: 4.8,
  },
  {
    id: 2,
    username: 'Ricky',
    review:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    rating: 2.7,
  },
  {
    id: 3,
    username: 'John',
    review:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    rating: 0.1,
  },
  {
    id: 4,
    username: 'Chandler',
    review: 'Aenean fermentum.',
    rating: 4.1,
  },
  {
    id: 5,
    username: 'Joey',
    review:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    rating: 4.3,
  },
  {
    id: 6,
    username: 'Monika',
    review:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    rating: 4.4,
  },
  {
    id: 7,
    username: 'Rachel',
    review: 'In sagittis dui vel nisl.',
    rating: 1.3,
  },
  {
    id: 8,
    username: 'Ross',
    review:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    rating: 0.5,
  },
  {
    id: 9,
    username: 'Phobe',
    review: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    rating: 0.6,
  },
  {
    id: 10,
    username: 'Ted Mosby',
    review: 'Nunc rhoncus dui vel sem. Sed sagittis.',
    rating: 4.3,
  },
];

const UserRating = () => {
  return (
    <Grid container spacing={2} p={3}>
      <Grid>
        <Typography variant='h6'>User Review's</Typography>
      </Grid>
      <Grid item xs={12}>
        {ratingArray.map((rating) => {
          return (
            <Card
              key={rating.id}
              sx={{
                padding: '8px',
                marginBottom: '6px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant='h6'> {rating.username} </Typography>
                <Rating name='user-rating' value={rating.rating} readOnly />
              </Box>
              <Typography variant='subtitle2'>{rating.review}</Typography>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default UserRating;
