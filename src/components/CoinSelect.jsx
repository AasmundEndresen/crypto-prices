import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import moment from 'moment'
import { withPrice } from '../context/priceContext'
import coins from '../assets/coins';
import { getCoinData } from '../services/market.services';


const SuggestionList = styled.div`
  position: absolute;
  z-index: 10;
  width: 220px;
  div {
    cursor: pointer;
    box-sizing: border-box;
    font-size: 14px;
    padding: 4px;
    background-color: white;
    border: 1px solid lightgray;
    width: 220px;
    &:hover {
      filter: brightness(85%);
    }
  }
`;

const StyledContainer = styled.div`
  position: relative;
  input {
      padding: 0px 8px;
      height: 32px;
      width: 200px;
      border: 2px solid steelblue;
      border-radius: 4px;
      &:focus, &:valid {
        outline: none;
      }
      &:focus + label, &:valid + label {
        font-size: 12px;
        opacity: 1;
        top: -7px;
        background-color: white;
        padding: 0px 4px;
        transition: all ease-in-out 300ms;
      }
    }
    label {
      color: steelblue;
      font-size: 14px;
      font-weight: bold;
      opacity: 0.4;
      top: 9px;
      left: 9px;
      position: absolute;
      transition: all ease-in-out 300ms;
    }
`;

function CoinSelect({ priceContext }) {
  const { setSelected, selected } = priceContext;
  const [suggestions, setSuggestions] = useState([]);
  const alreadyAdded = selected.map(({ id }) => id);
  let _timeStamp;

  const handleChange = function (e) {
    const _now = moment();
    _timeStamp = _now;
    setTimeout(() => {
      if (_timeStamp === _now && e.target.value) {
        const value = e.target.value.toLowerCase();
        const _new = coins.filter(coin => !alreadyAdded.includes(coin.id));
        const alts = _new.filter(coin => coin.symbol.toLowerCase().startsWith(value) || coin.name.toLowerCase().startsWith(value) || coin.id.toLowerCase().startsWith(value));
        alts.sort((a, b) => {
          const weight = (x) => [
            x.name.toLowerCase() === value ? 20 : 0,
            x.symbol.toLowerCase() === value ? 10 : 0,
            x.id.toLowerCase() === value ? 3 : 0,
            x.name.toLowerCase().startsWith(value) ? 3 : 0,
            x.symbol.toLowerCase().startsWith(value) ? 2 : 0,
            x.id.toLowerCase().startsWith(value) ? 1 : 0
          ];
          const aWeights = weight(a).reduce((acc, curr) => acc + curr, 0);
          const bWeights = weight(b).reduce((acc, curr) => acc + curr, 0);
          return aWeights > bWeights ? -1 : 1;
        })
        setSuggestions(alts.slice(0, 10));
      } else if (!e.target.value) {
        setSuggestions([]);
      }
    }, 500)

  }

  const handleClick = async function (el) {
    const newCoin = await getCoinData(el.id);
    const newState = [...selected, ...newCoin].sort((a, b) => b.market_cap - a.market_cap);
    setSuggestions([]);
    setSelected(newState);
    localStorage.setItem('selection', JSON.stringify(newState.map(({ id }) => id)));
  }

  return (
    <StyledContainer>
      <input type="text" id="addcoin" required onChange={(e) => handleChange(e)} />
      <label htmlFor="addcoin">Add Coin</label>
      <SuggestionList>
        {suggestions.map((el, i) => (
          <div key={i} onClick={() => handleClick(el)}>
            {el.name}
          </div>
        ))}
      </SuggestionList>
    </StyledContainer>
  )
}

CoinSelect.propTypes = {
  priceContext: PropTypes.object.isRequired,
}

export default withPrice(CoinSelect);

