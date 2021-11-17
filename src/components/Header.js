import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpeg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Brendan Ryan<br /></strong>
        <p>Software Developer</p>
        <br />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
