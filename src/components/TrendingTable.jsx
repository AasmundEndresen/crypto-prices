import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withPrice } from '../context/priceContext'
import CoinCard from './CoinCard';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function MainTable({ priceContext }) {
  const { trending, btc } = priceContext;
  return (
    <StyledContainer>
      <CoinCard el={btc} btc={btc} />
      {trending.map((el, i) => (
        <CoinCard key={i} el={el} btc={btc} />
      ))}
    </StyledContainer>
  )
}

MainTable.propTypes = {
  priceContext: PropTypes.object.isRequired,
}

export default withPrice(MainTable);
