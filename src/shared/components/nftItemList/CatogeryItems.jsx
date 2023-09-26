import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import "../../../assets/styles/styles.css";
import {
  bidItemList,
  buyItemList,
  raffleItemList,
} from "../../store/actions/buyBidItemActions";
import { useNavigate } from "react-router-dom";
import FixedNFT from "../fixed-nft";
import RaffleNFT from "../raffle-nft";
import AuctionNFT from "../auction-nft";
import { changeUserAmount } from "../../utils";
import { TOKEN_BALANCE } from "../../store/constants/nftsConstants";

export default function CatogeryItems({ nft }) {
  const [itemId, setItemId] = useState([nft?._id]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tokenBalanceList = useSelector((state) => state.tokenBalanceTotal);

  useSelector((state) => state.buyItems);
  useSelector((state) => state.bidItems);

  const { tokenBalance } = tokenBalanceList;

  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  //Fix Items
  const fixItems = () => {
    try {
      if (nft?.eSaleType === "fixed" && nft._id) {
        dispatch(buyItemList(nft._id))
          .then((res) => {
            console.log(res);
            navigate("/nftpage");
            setItemId(res?.data);
            console.log(itemId);
          })
          .catch((error) => {
            alert(error);
          });
      }
    } catch (error) {
      alert(error);
    }
  };

  //Bid Items
  const bidItems = (id, ba) => {
    try {
      if (nft?.eSaleType === "auction" && nft._id) {
        dispatch(bidItemList(nft._id, ba))
          .then((res) => {
            console.log(res);
            setItemId(res?.data);
          })
          .catch((error) => {
            toast.error(error, toastOptions);
          });
        toast.success("Your Bid Price :" + ba, toastOptions);
      }
    } catch (error) {
      toast.error(error, toastOptions);
    }
  };

  //Raffle Items
  const raffleItems = (id, q, a) => {
    try {
      dispatch(raffleItemList(nft._id, q))
        .then((res) => {
          const debited = tokenBalance?.data?.nTokenBalance - a
          dispatch({ type: TOKEN_BALANCE, payload: changeUserAmount(tokenBalance, debited) });
          setItemId(res?.data);
        })
        .catch((error) => {
          toast.error(error, toastOptions);
        });
    } catch (error) {
      toast.error(error, toastOptions);
    }
  };

  return (
    <>
      {/* fixed Items */}
      {nft.eSaleType === "fixed" ? (
        <>
          <FixedNFT nft={nft} handleBuy={() => fixItems()} />
        </>
      ) : // Bid Items
        nft.eSaleType === "auction" ? (
          <>
            <AuctionNFT nft={nft} handleBuy={(id, ba) => bidItems(id, ba)} />
          </>
        ) : (
          //Raffle Items
          <>
            <RaffleNFT nft={nft} handleBuy={(id, q, a) => raffleItems(id, q, a)} />
          </>
        )}
    </>
  );
}

CatogeryItems.propTypes = {
  nft: PropTypes.object,
};
