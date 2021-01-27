import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Introduction from '../Introduction';
import Donations from '../Introduction';

const HomeScreen = props => {
  return (
    <Fragment>
      <Introduction />
      {/* <Donations /> */}
    </Fragment>
  )
}

HomeScreen.propTypes = {

}

export default HomeScreen
