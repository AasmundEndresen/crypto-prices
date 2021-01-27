import React from 'react'
import { PriceProvider } from '../../context/priceContext'
import PropTypes from 'prop-types'
import Header from './Header';

const Layout = props => {
  return (
    <PriceProvider>
      <Header></Header>
      <main>{props.children}</main>
      <footer></footer>
    </PriceProvider>
  )
}

Layout.propTypes = {

}

export default Layout
