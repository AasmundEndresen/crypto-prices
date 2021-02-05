import React, { forwardRef, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { getAllAssets, getSelected, fetchSelectedAssets, addToSelected } from '../features/assets/asset.slice';


const applyWeight = (assets, value) => {
  const match = str => str.toLowerCase().startsWith(value.toLowerCase());
  const matches = assets.filter(a => match(a.symbol) || match(a.name) || match(a.id));
  matches.sort((a, b) => {
    const weightOf = x => [
      x.name.toLowerCase() === value.toLowerCase() ? 20 : 0,
      x.symbol.toLowerCase() === value.toLowerCase() ? 10 : 0,
      x.id.toLowerCase() === value.toLowerCase() ? 3 : 0,
      match(x.name) ? 3 : 0,
      match(x.symbol) ? 2 : 0,
      match(x.id) ? 1 : 0
    ];
    const toSum = (acc, curr) => acc + curr;
    return weightOf(a).reduce(toSum, 0) > weightOf(b).reduce(toSum, 0) ? -1 : 1;
  });
  return matches;
};

const Container = styled.div`
  position: relative;
  margin-right: 12px;
  input {
    padding: 0px 8px;
    height: 32px;
    width: 200px;
    border: none;
    background-color: #f5f5f5;
    box-shadow:
        -2px -2px 9px 2px rgba(255,255,255,0.75),
        2px 2px 9px 2px rgba(0,0,0,0.75);
    border-radius: 4px;
    &:focus, &:valid {
      outline: none;
      box-shadow:
        -1px -1px 9px 2px inset rgba(255,255,255,0.75),
        1px 1px 9px 2px inset rgba(0,0,0,0.25);
      transition: all ease-in-out 300ms;
    }
    &:focus + label, &:valid + label {
      font-size: 12px;
      opacity: 1;
      top: -20px;
      background-color: transparent;
      padding: 0px 4px;
      transition: all ease-in-out 300ms;
    }
  }
  label {
    color: steelblue;
    font-size: 14px;
    font-weight: bold;
    opacity: 0.4;
    top: 6px;
    left: 12px;
    position: absolute;
    transition: all ease-in-out 300ms;
  }
`;

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

const CoinSelect = ({ className }, ref) => {
  const [visible, setVisible] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const assets = useSelector(getAllAssets);
  const loadedAssets = useSelector(getSelected).data;
  const notLoaded = assets.data.filter(({ id }) => !loadedAssets.some(a => a.id === id));

  const handleInput = e => {
    const _now = moment();
    let _timeStamp = _now;
    setTimeout(() => {
      if (_timeStamp.isSame(_now) && e.target.value) {
        setSuggestions(applyWeight(notLoaded, e.target.value).slice(0, 10));
        setVisible(true);
      } else if (!e.target.value) {
        setVisible(false);
        setSuggestions([]);
      }
    }, 150);
  }

  const handleSelect = asset => {
    const { id, name, symbol } = asset;
    dispatch(fetchSelectedAssets(id));
    dispatch(addToSelected({ id, name, symbol }));
    setVisible(false);
  }

  const handleClick = e => {
    e.stopPropagation();
    ref.current.focus();
  }

  return (
    <Container className={className} onClick={e => handleClick(e)}>
      <input type="text" id="addcoin" required onChange={e => handleInput(e)} ref={ref} />
      <label htmlFor="addcoin">Add Coin</label>
      {(assets.status === 'succeeded' && visible) && (
        <SuggestionList>
          {suggestions.map((a, i) => (
            <div key={i} onClick={() => handleSelect(a)}>{a.name}</div>
          ))}
        </SuggestionList>
      )}
    </Container>
  )
}

export default forwardRef(CoinSelect);

