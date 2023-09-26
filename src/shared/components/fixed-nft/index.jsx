/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from 'prop-types'
import NFTBox from "../nft-box";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { buyItemList } from "../../store/actions/buyBidItemActions";

function FixedNFT({ nft, handleBuy }) {
  const dispatch = useDispatch();
  const { tokenBalance } = useSelector((state) => state.tokenBalanceTotal);
  const { buyItem } = useSelector((state) => state.buyItems);
  // console.log({ buyItem })

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
        if (tokenBalance?.data?.nTokenBalance > nft?.nBasePrice) {
          onBuy(id);
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

  function onBuy() {
    // dispatch(buyItemList(nft._id))
    // dispatch(buyItemList('62cd6674c0666b7560afc5cfs'))
    handleBuy && handleBuy(nft._id);
  }

  return (
    <NFTBox nft={nft}>
      <div className="active-btn-box large-btn shop-button ff">
        <button
          className="active-btn"
          type="button"
          onClick={() => handleClick(nft?._id)}
        >
          Buy Now
        </button>
      </div>
    </NFTBox>
  )
}
FixedNFT.propTypes = {
  nft: PropTypes.object,
  handleBuy: PropTypes.func
}
export default FixedNFT