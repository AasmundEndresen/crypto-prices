import React from 'react'
import { useSelector } from 'react-redux'
import { getTrending } from '../features/assets/asset.slice'
import AssetTable from './AssetTable'

const TrendingTable = props => {
  const trending = useSelector(getTrending);
  const assets = trending.data;
  return (
    <div>
      {
        (trending.status === 'succeeded') && (
          <AssetTable assets={assets} />
        )
      }
    </div>
  )
}

TrendingTable.propTypes = {

}

export default TrendingTable
