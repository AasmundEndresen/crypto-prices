import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { removeFromSelected } from '../features/assets/asset.slice';

const numberFormat = /\B(?=(\d{3})+(?!\d))/g;

function CoinCard({ el, compare, className }) {
  const dispatch = useDispatch();
  const getPriceAtBTCmcap = (el) => compare.market_cap / el.market_cap * el.current_price;
  const get1MamtAtBTCmcap = (el) => 1_000_000 / getPriceAtBTCmcap(el);
  const formatNum = (num) => num.toFixed(2).toString().replace(numberFormat, ",");
  const handleDelete = e => {
    e.stopPropagation();
    dispatch(removeFromSelected(el.id));
  }
  return (
    <div className={className}>
      {
        el.removeable && (
          <button className="delete-btn" onClick={e => handleDelete(e)}>✘</button>
        )
      }
      <div className="data">
        <h1>{el.name}</h1>
        <span className="current">{formatNum(el.current_price)}</span>
        <p className="increment">w/{(getPriceAtBTCmcap(el) / el.current_price).toFixed(1)}x</p>
        <p className="btcmcap">{formatNum(getPriceAtBTCmcap(el))}</p>
      </div>
      <p className="amount">You would need <span>{formatNum(get1MamtAtBTCmcap(el))} {el.symbol.toUpperCase()}</span> for $1M at that price, which is <span className="price">{formatNum(get1MamtAtBTCmcap(el) * el.current_price)}</span> at todays price</p>
      <img src={el.image} alt={`Logo for ${el.name}`} />
    </div>
  )
}

CoinCard.propTypes = {
  el: PropTypes.object.isRequired,
  compare: PropTypes.object.isRequired,
  selection: PropTypes.bool,
}

CoinCard.defaultProps = {
  selection: false,
};

export default styled(CoinCard)`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 150px;
  background-color: whitesmoke;
  border-radius: 8px;
  margin: 12px;
  padding: 16px;
  margin-bottom: 16px;
  overflow: hidden;
  box-shadow:
    2px 2px 9px 2px rgba(0,0,0,0.25),
    1px 1px 2px 1px inset rgba(0,0,0,0.25),
    -2px -2px 9px 2px rgba(255,255,255,0.75),
    -1px -1px 2px 1px inset rgba(255,255,255,0.75);
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
  .increment {
    padding: 0;
    margin: 0;
  }
  .current, .increment {
    font-size: 12px;
    color: gray;
    line-height: 1.2;
  }
  .btcmcap, .amount span {
    font-weight: bold;
  }
  .btcmcap {
    margin: 0;
    padding: 0;
    line-height: 2;
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

