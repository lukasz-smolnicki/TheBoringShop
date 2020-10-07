import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Detalis from './components/Detalis'
import Cart from './components/Cart'
import Default from './components/Default'


function App() {
  return (
    <>
      <Navbar />
      <ProductList />
      <Detalis />
      <Cart />
      <Default />
    </>
  );
}

export default App;
