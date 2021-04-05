import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header'

import HomeScreen from './screens/HomeScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';



function App() {



  return (
    <BrowserRouter>
      <Header />


      <main>
        <Route path='/' component={HomeScreen} exact />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path='/signin' component={SigninScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/shipping' component={ShippingAddressScreen} />
        <Route path="/payment" component={PaymentMethodScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path='/product/:id' component={ProductScreen} />
      </main>
      <footer className="row center">All right reserved</footer>

    </BrowserRouter>
  )
}

export default App;
