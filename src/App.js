import React, { Component } from 'react';
import Router from './Router.js'
import { NavLink } from 'react-router-dom'
import './App.css';


const Nav = (props) => <nav>
<ul><li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/cart'>Cart</NavLink></li>
</ul></nav>

class App extends Component {
  render() {
    return (
      <div className='page-container'>
      <Nav/>
      <h1> Store </h1>
      <Router/>
      </div>
    );
  }
}

export default App;
