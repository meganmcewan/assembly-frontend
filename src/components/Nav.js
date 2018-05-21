import React, { Component } from 'react';
import '../App.css';
import { Link, } from 'react-router-dom'


class Nav extends Component {

  render() {  

    return (

          <div className="nav">
          
             <Link className='link' to='/'> ASSEMBLY HOME DESIGN</Link>
             <Link className='link' to= '/about'> ABOUT </Link>
             <Link className='link' to= '/furniture-design'> FURNITURE DESIGN </Link>
             <Link className='link' to= '/home-goods'> HOME GOODS </Link>
          </div>
       
    );
  }
}

export default Nav;
