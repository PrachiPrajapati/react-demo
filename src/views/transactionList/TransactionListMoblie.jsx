import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

export default function TransactionListMoblie({ transaction }) {
  const date = moment(transaction.createdAt).format("DD/MM/yyyy");
  const time = moment(transaction.createdAt).format("hh:mm:ss");
  return (
    <li>
      <div className="item-mb">
        <div className="date-time">
          <p>{date}</p>
          <p>{time}</p>
        </div>
        <p>{transaction.eSaleType}</p>
      </div>
      <div className="item-mb">
        <p>
          <b>{transaction.sCategoryName}</b>
        </p>
        <p className="text-end">
          <b>
            {transaction.eSaleType === "fixed" ? (
              <div>{transaction.nBasePrice}</div>
            ) : transaction.eSaleType === "auction" ? (
              <div>{transaction.nMinBidAmount}</div>
            ) : (
              <div>{transaction.nPricePerTicket}</div>
            )}
          </b>
        </p>
      </div>
    </li>
  );
}

TransactionListMoblie.propTypes = {
  transaction: PropTypes.object,
};
