import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import FourOFour from './pages/FourOFour';
import Navbar from './components/Navbar';
import Thankyou from './pages/Thankyou';

function App() {
  const [search, setSearch] = useState('');
  return (
    <Router>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home search={search} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/thankyou' element={<Thankyou />} />
        <Route path='*' element={<FourOFour />} />
      </Routes>
    </Router>
  );
}

export default App;
