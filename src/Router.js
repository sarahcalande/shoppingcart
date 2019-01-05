import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage.js'
import Cart from './Cart.js'
import CheckoutPage from './checkoutpage.js'
import OrdersPage from './orderspage.js'

const Router =()=>(
<Switch>
<Route exact path='/' component = {HomePage} />
<Route exact path='/cart' component = {Cart} />
<Route exact path='/checkout' component = {CheckoutPage} />
<Route path='/orders/:id' component = {OrdersPage} />
</Switch>
)

export default Router
