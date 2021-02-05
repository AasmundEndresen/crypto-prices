import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { getAssetsByIds, getAssetForCompare } from '../features/assets/asset.slice'
import CoinCard from './CoinCard';

const AssetTable = ({ assets, className }) => {
  const asset = useSelector(getAssetForCompare);
  const ids = assets.map(({ id }) => id);
  const selected = useSelector(state => getAssetsByIds(state, ids, (a, b) => b.market_cap - a.market_cap)).filter(({ id }) => id !== asset.id).map(a => ({
    ...a,
    ...assets.find(({ id }) => id === a.id),
  }));
  return (
    <div className={className}>
      <CoinCard el={asset} compare={asset} />
      {selected.map((el, i) => <CoinCard key={i} el={el} compare={asset} />)}
    </div>
  )
}

AssetTable.propTypes = {
  assets: PropTypes.array.isRequired,
}

export default styled(AssetTable)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 12px;
  justify-content: center;
  max-width: 968px;
`;

