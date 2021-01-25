import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withPrice } from '../context/priceContext'
import CoinCard from './CoinCard';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding: 12px;
  justify-content: center;
  max-width: 968px;
`;

function MainTable({ priceContext }) {
  const { selected, btc } = priceContext;
  return (
    <StyledContainer>
      <CoinCard el={btc} btc={btc} />
      {selected.map((el, i) => (
        <CoinCard key={i} el={el} btc={btc} selection={true} />
      ))}
    </StyledContainer>
  )
}

MainTable.propTypes = {
  priceContext: PropTypes.object.isRequired,
}

export default withPrice(MainTable);

