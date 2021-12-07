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
export default function App() {
  return (
    <>
      <Router>
          <Route exact path="/" component={Maindashboard} />
          <Route exact path="/signup">
            <SIgnup />
          </Route>
          <Route exact path="/mainproducts">
            <MainProductsPage />
          </Route>
      </Router>
    </>
  )
}
