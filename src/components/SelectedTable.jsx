import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getSelected } from '../features/assets/asset.slice'
import AssetTable from './AssetTable'

const TrendingTable = props => {
  const selected = useSelector(getSelected);
  const ids = selected.data.map(({ id }) => id);
  return (
    <div>
      {
        (selected.status === 'succeeded') && (
          <AssetTable ids={ids} />
        )
      }
    </div>
  )
}

TrendingTable.propTypes = {

}

export default TrendingTable