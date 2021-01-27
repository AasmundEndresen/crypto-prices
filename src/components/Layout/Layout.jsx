import React from 'react'
import { PriceProvider } from '../../context/priceContext'
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

export default Layout
