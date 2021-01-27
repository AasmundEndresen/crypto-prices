import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom"
import { withPrice } from '../../context/priceContext'
import { StyledContainer } from './CoinCard.components'


const numberFormat = /\B(?=(\d{3})+(?!\d))/g;

function CoinCard({ el, btc, priceContext, selection }) {
  const { selected, setSelected } = priceContext;
  const getPriceAtBTCmcap = (el) => btc.market_cap / el.market_cap * el.current_price;
  const get1MamtAtBTCmcap = (el) => 1_000_000 / getPriceAtBTCmcap(el);
  const formatNum = (num) => num.toFixed(2).toString().replace(numberFormat, ",");
  const handleDelete = function (e) {
    e.stopPropagation();
    const newState = selected.filter(x => x.id !== el.id);
    localStorage.setItem('selection', JSON.stringify(newState.map(({ id }) => id)));
    setSelected(newState);
  };
  const handleNavigation = (e) => {
    e.stopPropagation();
    // const history = useHistory();
    // history.push(`/${el.name}`);
  };
  return (
    <StyledContainer onClick={handleNavigation}>
      {selection && <button className="delete-btn" onClick={handleDelete}>✘</button>}
      <div className="data">
        <h1>{el.name}</h1>
        <span className="current">{formatNum(el.current_price)}</span>
        <p className="increment">w/{(getPriceAtBTCmcap(el) / el.current_price).toFixed(1)}x</p>
        <p className="btcmcap">{formatNum(getPriceAtBTCmcap(el))}</p>
      </div>
      <p className="amount">You would need <span>{formatNum(get1MamtAtBTCmcap(el))} {el.symbol.toUpperCase()}</span> for $1M at that price, which is <span className="price">{formatNum(get1MamtAtBTCmcap(el) * el.current_price)}</span> at todays price</p>
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

