import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Layout = props => {
  return (
    <Fragment>
      <header></header>
      <main>{this.props.children}</main>
      <footer></footer>
    </Fragment>
  )
}

Layout.propTypes = {

}

export default Layout
