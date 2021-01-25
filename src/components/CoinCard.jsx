import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withPrice } from '../context/priceContext'

const StyledContainer = styled.div`
    position: relative;
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 150px;
  background-color: whitesmoke;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  h1 {
    font-size: 20px;
    padding: 0;
    margin: 0;
    color: blueviolet;
  }
  img {
    position: absolute;
    height: 100%;
    top: 30px;
    right: -25px;
    opacity: 0.1;
  }
  .current, .btcmcap, .price {
    &::before {
      content: '$';
    }
  }
  .amount {
    font-size: 14px;
    color: gray;
  }
  .current {
    font-size: 12px;
    color: gray;
  }
  .btcmcap, .amount span {
    font-weight: bold;
  }
  .btcmcap {
    color: green
  }
  .data {
    margin-right: 16px;
  }
  .delete-btn {
    position: absolute;
    font-weight: bold;
    color: lightcoral;
    top: 8px;
    right: 8px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all ease-in-out 150ms;
    &:hover {
      transform: scale(1.1) rotate(5deg);
      transition: all ease-in-out 150ms;
    }
  }
`;

const numberFormat = /\B(?=(\d{3})+(?!\d))/g;

function CoinCard({ el, btc, priceContext, selection }) {
  const { selected, setSelected } = priceContext;
  const getPriceAtBTCmcap = (el) => btc.market_cap / el.market_cap * el.current_price;
  const get1MamtAtBTCmcap = (el) => 1_000_000 / getPriceAtBTCmcap(el);
  const formatNum = (num) => num.toFixed(2).toString().replace(numberFormat, ",");
  const handleDelete = function () {
    const newState = selected.filter(x => x.id !== el.id);
    localStorage.setItem('selection', JSON.stringify(newState.map(({ id }) => id)));
    setSelected(newState);
  };
  return (
    <StyledContainer>
      {selection && <button className="delete-btn" onClick={() => handleDelete()}>✘</button>}
      <div className="data">
        <h1>{el.name}</h1>
        <span className="current">{formatNum(el.current_price)}</span>
        <p className="btcmcap">{formatNum(getPriceAtBTCmcap(el))}</p>
      </div>
      <p className="amount">You would need <span>{formatNum(get1MamtAtBTCmcap(el))} {el.symbol.toUpperCase()}</span> for $1M at that price, which is <span className="price">{formatNum(get1MamtAtBTCmcap(el) * el.current_price)}.</span> today</p>
      <img src={el.image} alt={`Logo for ${el.name}`} />
    </StyledContainer>
  )
}

CoinCard.propTypes = {
  el: PropTypes.object.isRequired,
  btc: PropTypes.object.isRequired,
  priceContext: PropTypes.object.isRequired,
  selection: PropTypes.bool,
}

CoinCard.defaultProps = {
  selection: false,
};

export default withPrice(CoinCard);
