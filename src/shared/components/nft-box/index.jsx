import React from "react";
import PropTypes from 'prop-types'

function NFTBox({ nft, children }) {
  return (
    <>
      <div className="img-box">
        <img src={nft?.sImage} alt="sneakpeek_avatar" />
      </div>
      <div className="info-box">
        <h5>{nft.sTitle}</h5>
        <h6>{nft.nBasePrice}</h6>
        {children}
      </div>
    </>
  )
}
NFTBox.propTypes = {
  nft: PropTypes.object,
  children: PropTypes.node.isRequired,
}
export default NFTBox