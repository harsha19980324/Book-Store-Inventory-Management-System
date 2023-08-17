
import React, { Component } from 'react'; 
import {BrowserRouter,Route} from 'react-router-dom';



import NavBar from './components/NavBar';
import Home from './components/Home';
import CreateInventry from './components/CreateInventry';
import EditInventry from './components/EditInventry';
import InventryDetails from './components/InventryDetails';
import AdminHome from './components/AdminHome';
import Footer from './components/footer';


import CreateOrder from './components/CreateOrder';
import EditOrder from './components/EditOrder';
import OrderDetails from './components/OrderDetails';
import AdminOrder from './components/AdminOrder';
import customerDetail from './components/customerDetail';










import "./index.css"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
        

      <NavBar/>
      <Route path="/" exact component={Home}></Route>
      <Route path="/CreateInventry" exact component={CreateInventry}></Route>
      <Route path="/EditInventry/:id" exact component={EditInventry}></Route>
      <Route path="/InventryDetails/:id" exact component={InventryDetails}></Route>
      <Route path="/AdminHome" exact component={AdminHome}></Route>

      <Route path="/CreateOrder" exact component={CreateOrder}></Route>
        <Route path="/EditOrder/:id" exact component={EditOrder}></Route>
        <Route path="/OrderDetails/:id" exact component={OrderDetails}></Route>
        <Route path="/customerDetail" exact component={customerDetail}></Route>
        <Route path="/AdminOrder" exact component={AdminOrder}></Route>
      <br/><br/><br/><br/>
      <Footer/>
      
      

      </BrowserRouter>
    )
  }
}
