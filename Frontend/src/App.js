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
import ProductDs from './Components/Aniket/ProductDs';
import MainHeader from './Components/Aniket/MainHeader';
export default function App() {
  return (
    <div className="container">
      <Router>
        {/* history.push */}
        <MainHeader />
          <Route exact path="/" component={Maindashboard} />
          <Route exact path="/signup">
            <SIgnup />
          </Route>
          <Route exact path="/mainproducts">
            <MainProductsPage />
          </Route>
          <Route exact path='/productdescription'>
            <ProductDs />
          </Route>
      </Router>
      </div>
  )
}
