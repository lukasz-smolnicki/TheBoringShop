import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Detalis from './components/Detalis'
import Cart from './components/Cart/'
import Default from './components/Default'
import Modal from './components/Modal'


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/detalis" component={Detalis}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
    </>
  );
}

export default App;
