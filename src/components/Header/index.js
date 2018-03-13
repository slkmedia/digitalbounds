import React from 'react'
import Link from 'gatsby-link'

import './Header.scss'

const Header = () => (
  <div className='Header__logo'>
    <Link to={'/'} >
      Digital Bounds
    </Link>
    <br /><br />
    <div>Example header component</div>
    <hr />
  </div>
)

export default Header
