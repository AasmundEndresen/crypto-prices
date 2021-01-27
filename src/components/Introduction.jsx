import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Introduction = ({ className }) => {
  return (
    <section className={className}>
      <h2>What if X flipped Bitcoin?</h2>
      <p>We use the CoinGecko API to get data for more then 7,000 coins to answer three simple questions</p>
      <ul>
        <li>
          <span class="question">What price would they be if they had the same marketcap as Bitcoin?</span>
        </li>
        <li>
          <span class="question">How much would I need to be a millionaire?</span>
        </li>
        <li>
          <span class="question">How much would that cost me today?</span>
        </li>
      </ul>
    </section>
  )
}

Introduction.propTypes = {

}

export default styled(Introduction)`
  max-width: 968px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 8px;
  margin: 12px;
  background-color: white;
  box-shadow:
  2px 2px 9px 2px rgba(0,0,0,0.25),
  1px 1px 2px 1px inset rgba(0,0,0,0.25),
  -2px -2px 9px 2px rgba(255,255,255,0.75),
  -1px -1px 2px 1px inset rgba(255,255,255,0.75);
  h2 {
    font-size: 18px;
    line-height: 1;
    padding: 4px;
    border-bottom: 2px solid whitesmoke;
    color: #495865;
    text-align: center;
    width: 100%;
  }
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  p {
    background-color: transparent
  }
  p, span {
    padding: 8px;
    font-size: 14px;
  }
  .question {
    display: block;
  }
`;
