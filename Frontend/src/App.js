import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login';
import SIgnup from './Components/SIgnup';
import Forget from './Components/Forget';
import Maindashboard from './Components/Maindashboard';
import MainProductsPage from './Components/Khyati/MainProductsPage';
import Wishlist from './Components/Khyati/WishlistPage';
export default function App() {
  return (
    <div className="container">
      <Router>
        {/* history.push */}
          <Route exact path="/" component={Maindashboard} />
          <Route exact path="/signup">
            <SIgnup />
          </Route>
          <Route exact path="/mainproducts">
            <MainProductsPage />
          </Route>
          <Route exact path="/Wishlist">
            <Wishlist />
          </Route>
      </Router>
      </div>
  )
}
