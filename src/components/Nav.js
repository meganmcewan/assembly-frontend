import React, { Component } from 'react';
import '../App.css';

import { Link, } from 'react-router-dom'


class Nav extends Component {

  render() {  

    return (

          <div className="App">
             <Link to='/'> Asssembly Home Design</Link>
             <Link to= '/about'> About </Link>
          </div>
       
    );
  }
}

export default Nav;