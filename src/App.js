import React, { Component } from 'react';
import Router from './Router.js'
import { NavLink, withRouter } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'


const Nav = ({ cart}) => <nav>
<ul className="top-menu"><li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/cart'>Cart ({cart.reduce((acc, item)=> {
  return acc + item.quantity
}, 0)})</NavLink></li>
<li><NavLink to='/checkout'>Check out</NavLink></li>
</ul></nav>

class App extends Component {
  render() {
    return (
      <div className='page-container'>
      <Nav { ...this.props}/>
      <h1> Store </h1>
      <Router/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default withRouter(connect(mapStateToProps)(App));
