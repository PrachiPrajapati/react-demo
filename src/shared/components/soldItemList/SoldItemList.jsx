import React from "react";
import PropTypes from "prop-types";
import "../../../assets/styles/styles.css";

export default function NftBuyItemList({ item }) {
  return (
    <li>
      <div className="img-box">
        <img src={item?.sImage} alt="Images" />
      </div>
      <div className="info-box">
        <h5>{item?.sTitle}</h5>
        <h6>
          {item.eSaleType === "fixed" ? (
            <div>{item.nBasePrice}</div>
          ) : item.eSaleType === "auction" ? (
            <div>{item.nMinBidAmount}</div>
          ) : (
            <div>{item.nPricePerTicket}</div>
          )}
        </h6>
      </div>
    </li>
  );
}

NftBuyItemList.propTypes = {
  item: PropTypes.object,
};
