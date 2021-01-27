import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CoinSelect from '../CoinSelect';

const Header = ({ className }) => {
  return (
    <nav className={className}>
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
      <CoinSelect />
    </nav>
  )
}

Header.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(Header)`
  box-sizing: border-box;
  margin: 0;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  width: 100vw;
  ul {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    li {
      box-sizing: border-box;
      list-style: none;
      margin: 0;
      padding: 0;
      a {
        padding: 4px 12px;
        color: white;
        font-weight: bold;
        color: lightskyblue;
      }
    }
  }
`;
