import React from 'react'
import { useSelector } from 'react-redux'
import { getTrending } from '../features/assets/asset.slice'
import AssetTable from './AssetTable'

const TrendingTable = props => {
  const trending = useSelector(getTrending);
  const ids = trending.data.map(({ id }) => id);
  return (
    <div>
      {
        (trending.status === 'succeeded') && (
          <AssetTable ids={ids} />
        )
      }
    </div>
  )
}

TrendingTable.propTypes = {

}

export default TrendingTable
