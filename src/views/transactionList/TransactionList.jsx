import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

export default function TransactionList({ transaction }) {
  const date = moment(transaction.createdAt).format("DD/MM/yyyy");
  const time = moment(transaction.createdAt).format("hh:mm:ss");

  return (
    <tr>
      <td className="date">{date}</td>
      <td className="time">{time}</td>
      <td className="type">{transaction.eSaleType}</td>
      <td className="item">{transaction.sCategoryName}</td>
      <td className="price">
        {transaction.eSaleType === "fixed" ? (
          <div>{transaction.nBasePrice}</div>
        ) : transaction.eSaleType === "auction" ? (
          <div>{transaction.nMinBidAmount}</div>
        ) : (
          <div>{transaction.nPricePerTicket}</div>
        )}
      </td>
    </tr>
  );
}

TransactionList.propTypes = {
  transaction: PropTypes.object,
};
