/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
};

const Home = ({ search }) => {
  const [allProducts, setAllProducts] = useState([]);

  const { isLoading, data } = useQuery(['get-all-products'], fetchProducts);

  useEffect(() => {
    if (!isLoading) {
      setAllProducts(data);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (!isLoading) {
      if (search.length > 1) {
        const newArray = [];
        data.forEach((product) => {
          if (product?.title.toLowerCase().includes(search.toLowerCase()))
            newArray.push(product);
        });
        setAllProducts(newArray);
      } else {
        setAllProducts(data);
      }
    }
  }, [search, isLoading]);

  if (isLoading) {
    return <Loading />;
  }


  return (
    <Grid container mt={'80px'} px={3} spacing={4} mb={5}>
      {allProducts.map((product) => {
        return (
          <Grid item xs={12} md={6} lg={3} key={product?.id}>
            <ProductCard product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;
