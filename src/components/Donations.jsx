import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import QrCode from './QrCode'

const Donations = ({ className }) => {
  return (
    <div className={className}>
      <h2>Donations</h2>
      <QrCode name={'btc'} />
      <QrCode name={'eth'} />
      <QrCode name={'xlm'} />
    </div>
  )
}

Donations.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(Donations)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 12px;
  h2 {
    margin: 0;
    padding: 0;
    line-height: 1;
    text-align: center;
    font-size: 20px;
    width: 100%;
    mix-blend-mode: soft-light;
  }
`;
