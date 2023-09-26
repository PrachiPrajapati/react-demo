/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import PropTypes from 'prop-types'
import NFTBox from "../nft-box";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Countdown from "react-countdown";
import { dateExp } from "../../utils";
import { TOKEN_BALANCE } from "../../store/constants/nftsConstants";

function AuctionNFT({ nft, handleBuy }) {
  const [topBid, setTopBid] = useState(nft?.nMinBidAmount)
  const inputRef = useRef(null)
  const dispatch = useDispatch();
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
        if (topBid < inputRef.current.value) {
          if (tokenBalance?.data?.nTokenBalance > inputRef.current.value) {
            handleBuy(id, inputRef.current.value);
          } else {
            toast.error("Your Token Balance is less than Base Price", toastOptions);
          }
        } else {
          toast.error(`Minimum bid price is: ${topBid}`, toastOptions);
        }
      }
    } catch (error) {
      toast.error(error, toastOptions);
    }
  }

  return (
    <NFTBox nft={nft}>
      <h6 style={{ display: "flex", justifyContent: "space-between" }}>
        Top Bid : {topBid}
        <div>
          <Countdown
            date={dateExp(nft)}
            renderer={({ days, hours, minutes, seconds }) => {
              return (
                <span>
                  {days * 24 + hours}:{minutes}:{seconds}
                </span>
              );
            }}
          />
        </div>
      </h6>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input-box">
          <input
            ref={inputRef}
            required
            name="bidAmount"
            type="number"
            className="form-control-box"
            placeholder="Bid Amount..."
          />
          <div className="active-btn-box">
            <button
              onClick={handleClick}
              className="active-btn"
              type="submit"
            >
              Bid
            </button>
          </div>
        </div>
      </form>
    </NFTBox>
  )
}
AuctionNFT.propTypes = {
  nft: PropTypes.object,
  handleBuy: PropTypes.func
}
export default AuctionNFT