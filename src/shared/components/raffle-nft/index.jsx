/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from 'prop-types'
import NFTBox from "../nft-box";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function RaffleNFT({ nft, handleBuy }) {
  const [quantity, setQuantity] = useState(0);
  const [ticketAmount, setTicketAmount] = useState(0);
  const { tokenBalance } = useSelector((state) => state.tokenBalanceTotal);

  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  function handleClick(id) {
    const token = localStorage.getItem("token");
    try {
      if (!token) {
        toast.error("Please Login", toastOptions);
      } else {
        if (tokenBalance?.data?.nTokenBalance > ticketAmount) {
          handleBuy(id, quantity, ticketAmount);
        } else {
          toast.error(
            "Your Token Balance is less than Base Price",
            toastOptions
          );
        }
      }
    } catch (error) {
      toast.error(error, toastOptions);
    }
  }

  const handleDecrement = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
      setTicketAmount(ticketAmount - nft?.nPricePerTicket);
    }
  }

  const handleIncrement = () => {
    if (quantity <= nft?.nTicketsPerUser) {
      setQuantity(quantity + 1);
      setTicketAmount(ticketAmount + nft?.nPricePerTicket);
    }

  }

  return (
    <NFTBox nft={nft}>
      <h6>{ticketAmount}</h6>
      <div className="inc-dec-box">
        <div className="min-plus-btn">
          <button
            className="dec-btn"
            type="button"
            onClick={handleDecrement}
            disabled={quantity === 0}
          >
            -
          </button>
          <span className="amount-box">{quantity}</span>
          <button
            className="inc-btn"
            type="button"
            onClick={handleIncrement}
            disabled={quantity === nft?.nTicketsPerUser}
          >
            +
          </button>
        </div>
        <div className="active-btn-box mt-0">
          <button
            className="active-btn"
            type="button"
            onClick={handleClick}
          >
            Buy Now
          </button>
        </div>
      </div>
    </NFTBox>
  )
}
RaffleNFT.propTypes = {
  nft: PropTypes.object,
  handleBuy: PropTypes.func
}
export default RaffleNFT