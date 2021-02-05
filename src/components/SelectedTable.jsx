import React from 'react'
import { useSelector } from 'react-redux'
import { getSelected } from '../features/assets/asset.slice'
import AssetTable from './AssetTable'

const TrendingTable = props => {
  const selected = useSelector(getSelected);
  const assets = selected.data.map(a => ({ ...a, removeable: true }));
  return (
    <div>
      {(selected.status === 'succeeded') && (
        <AssetTable assets={assets} />
      )}
    </div>
  )
}

TrendingTable.propTypes = {

}

export default TrendingTable