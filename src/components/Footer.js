import React, { Component } from 'react';
import '../App.css';

import { Link, } from 'react-router-dom'


class Footer extends Component {

  render() {

    return (
        <div className="nav">
            <Link className='link' to='/'> ASSEMBLY HOME DESIGN</Link>
            <Link className='link' to= '/about'> ABOUT </Link>
            <div className='contact-info'>
              <div>CONTACT:</div>
              <div>Shanna Floodstrom</div>
              <div>info@assemblyhomedesign.com</div>
            </div>
                    
        </div>
       
    );
  }
}

export default Footer;
