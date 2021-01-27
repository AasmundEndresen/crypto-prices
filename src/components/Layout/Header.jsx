import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/selected">Selected</Link>
        </li>
        <li>
          <Link to="/trending">Trending</Link>
        </li>
      </ul>
    </nav>
  )
}

Header.propTypes = {

}

export default Header
