import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import SIgnup from './Components/SIgnup';
import Forgot from './Components/Forgot';
import Maindashboard from './Components/Maindashboard';
import MainProductsPage from './Components/Khyati/MainProductsPage';
import Wishlist from './Components/Khyati/WishlistPage';
import ProductDs from './Components/Aniket/ProductDs';
import MainHeader from './Components/Aniket/MainHeader';
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
          <Route exact path="/Forgot">
            <Forgot />
          </Route>
          <Route exact path="/mainproducts">
            <MainProductsPage />
          </Route>
          <Route exact path="/Wishlist">
            <Wishlist />
          </Route>
          <Route exact path='/productdescription'>
            <ProductDs />
            </Route>
      </Router>
      </div>
  )
}
