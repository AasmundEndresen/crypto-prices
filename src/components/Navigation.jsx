import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CoinSelect from './CoinSelect'
import routes from '../app.routes'

const Navigation = ({ className }) => {
  const [burger, setBurger] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    setBurger(navRef.current.offsetParent.offsetTop > 64);
  }, [navRef])
  const handleClick = () => {
    if (burger) {
      navRef.current.focus();
      setOpen(!open);
    }
  };
  return (
    <nav className={`${className} ${burger ? 'burger' : ''} ${open ? 'open' : ''}`} onClick={e => handleClick(e)}>
      <div className="pages">
        {routes.map((r, i) => <NavLink to={r.path} key={i} className="nav-link">{r.title}</NavLink>)}
      </div>
      <CoinSelect className="search" ref={navRef} />
    </nav>
  )
}

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(Navigation)`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 12px 32px;
  align-items: center;
  .pages {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 4px;
    overflow: hidden;
    box-shadow:
        -2px -2px 9px 2px rgba(255,255,255,0.75),
        2px 2px 9px 2px rgba(0,0,0,0.75);
  }
  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: padding-box;
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 16px;
    width: 200px;
    height: 32px;
    background-color: #beb7d6;
    text-decoration: none;
    color: steelblue;
    font-weight: bold;
    border-radius: 2px;
    &:hover {
      filter: hue-rotate(-25deg);
      box-shadow:
        -1px -1px 1px 1px inset rgba(255,255,255,0.75),
        1px 1px 1px 1px inset rgba(0,0,0,0.25);
      transition: all ease-in-out 150ms;
    }
  }
  &.burger {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 0;
    height: 26px;
    width: 40px;
    cursor: pointer;
    clip-path: polygon(0 5%,80% 0, 100% 20%, 40% 100%, 0% 95%);
    overflow: hidden;
    transition: all ease-in-out 300ms;
    &::before, &::after {
      content: '';
      display: flex;
      height: 4px;
      width: 40px;
      background: 'transparent';
      border: 0px solid #f5f5f5;
      border-top-width: 6px;
    }
    &.open {
      width: 90vw;
      height: 90vh;
      top: 5vh;
      left: 5vw;
      z-index: 100;
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      background-color: #f5f5f5;
      box-shadow:
        -2px -2px 9px 2px rgba(255,255,255,0.75),
        2px 2px 9px 2px rgba(0,0,0,0.75),
        -1px -1px 9px 2px inset rgba(255,255,255,0.75),
        1px 1px 9px 2px inset rgba(0,0,0,0.25);
      padding: 32px;
      padding-top: 64px;
      clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
      transition: all ease-in-out 300ms;
      &::before, &::after {
        position: absolute;
        background: white;
        pointer-events: auto;
        border-radius: 2px;
        border-color: rgba(0,0,0,0.25);
        top: 24px;
        right: 12px;
        cursor: pointer;
        border-width: 2px;
      }
      &::before {
        transform: rotate(-45deg);
      }
      &::after {
        transform: rotate(45deg);
      }
      .search {
        order: 1;
        margin-bottom: 24px;
      }
      .pages {
        order: 2;
        width: 100%;
        .nav-link {
          display: flex;
          justify-content: center;
          font-size: 24px;
          text-decoration: none;
          align-items: center;
          width: 100%;
          padding: 24px;
        }
        .nav-link:not(:last-child) {
          border-bottom: 1px solid #f3e6e6;
        }
      }
      .pages, .search {
        position: relative;
        display: block;
      }
    }
    &::after {
      border-bottom-width: 6px;
    }
    .pages, .search {
      display: none;
    }
  }
`;
