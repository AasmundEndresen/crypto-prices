import React from 'react'
import styled from 'styled-components'


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
  margin-right: 12px;
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

function CoinSelect() {

  return (
    <StyledContainer>
      <label htmlFor="addcoin">Add Coin</label>
      <SuggestionList>
      </SuggestionList>
    </StyledContainer>
  )
}

export default CoinSelect;

