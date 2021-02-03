import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { getAssetsByIds, getAssetForCompare } from '../features/assets/asset.slice'
import CoinCard from './CoinCard';

const AssetTable = ({ ids, className }) => {
  const asset = useSelector(getAssetForCompare);
  const selected = useSelector(state => getAssetsByIds(state, ids));
  return (
    <div className={className}>
      <CoinCard el={asset} compare={asset} />
      {selected.map((el, i) => <CoinCard key={i} el={el} compare={asset} />)}
    </div>
  )
}

AssetTable.propTypes = {
  ids: PropTypes.array.isRequired,
}

export default styled(AssetTable)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 12px;
  justify-content: center;
  max-width: 968px;
`;

