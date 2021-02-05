import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const QrCode = ({ name, className }) => {
  const Component = React.lazy(() => import(`../assets/${name}`));
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className={className}>
        <span className="asset">{name}</span>
        <Component className="qr" />
      </div>
    </Suspense>
  )
}

QrCode.propTypes = {

}

export default styled(QrCode)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12px;
  .asset {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    color: blue;
    mix-blend-mode: soft-light;
  }
  .qr {
    width: 100px;
    mix-blend-mode: soft-light;
  }
`;
