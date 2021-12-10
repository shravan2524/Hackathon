import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import SIgnup from './Components/SIgnup';
import Forget from './Components/Forget';
import Maindashboard from './Components/Maindashboard';
import MainProductsPage from './Components/Khyati/MainProductsPage';
import Wishlist from './Components/Khyati/WishlistPage';
import ProductDs from './Components/Aniket/ProductDs';
import MainHeader from './Components/Aniket/MainHeader';
import Cart from './Components/Khyati/Cart'

export default function App() {
  return (
    <div className="container">
      <MainHeader />
      <Router>
          <Route exact path="/" component={Maindashboard} />
          <Route exact path="/signup">
            <SIgnup />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/category">
            <MainProductsPage />
          </Route>
          <Route exact path="/Wishlist">
            <Wishlist />
          </Route>
          <Route exact path='/productdescription'>
            <ProductDs />
            </Route>
            <Route exact path='/Cart'>
            <Cart />
            </Route>
      </Router>
      </div>
  )
}
