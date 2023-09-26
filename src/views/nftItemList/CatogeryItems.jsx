import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "../../assets/styles/styles.css";
import {
  bidItemList,
  buyItemList,
  raffleItemList,
} from "../../shared/store/actions/buyBidItemActions";
import { useNavigate } from "react-router-dom";

export default function CatogeryItems({ nft }) {
  //console.log("nfttttt", nft);
  const [bidAmount, setBidAmount] = useState();
  const [quantity, setQuantity] = useState(0);
  const [itemId, setItemId] = useState([nft?._id]);
  const [ticketAmount, setTicketAmount] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //const nftItems = useSelector((state) => state.nftItems);
  const tokenBalanceList = useSelector((state) => state.tokenBalanceTotal);

  //console.log("nftItems", nftItems);
  //console.log("tokenBalanceList", tokenBalanceList);

  useSelector((state) => state.buyItems);
  useSelector((state) => state.bidItems);
  useSelector((state) => state.raffleItems);

  //const { nfts } = nftItems;
  const { tokenBalance } = tokenBalanceList;
  //console.log(tokenBalance?.data?.nTokenBalance);
  //console.log(nft);
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
  const bidItems = () => {
    try {
      if (nft?.eSaleType === "auction" && nft._id) {
        try {
          if (nft?.nMinBidAmount <= bidAmount) {
            alert("Your Bid Price : " + bidAmount);
          }
          dispatch(bidItemList(nft._id, bidAmount))
            .then((res) => {
              console.log(res);
              if (bidAmount) {
                window.location.reload(setBidAmount(bidAmount));
              } else {
                alert("Please Enter Bid Amount");
              }
              setItemId(res?.data);
            })
            .catch((error) => {
              alert(error);
            });
        } catch (error) {
          alert(error);
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  //Raffle Items
  const raffleItems = () => {
    console.log(nft);
    try {
      if (nft?.eSaleType === "raffle" && nft._id) {
        if (nft?.nCountOfTickets === 0) {
          setQuantity(0);
          setBidAmount(0);
          alert("No TIckets are available");
        }
        dispatch(raffleItemList(nft._id, quantity))
          .then((res) => {
            console.log(res);
            setItemId(res?.data);
          })
          .catch((error) => {
            alert(error);
          });
      }
    } catch (error) {
      alert(error);
    }
  };

  //FixBuy Items
  const fixedBuyItemHandler = () => {
    const token = localStorage.getItem("token");
    try {
      if (!token) {
        alert("Please Login");
      } else {
        if (tokenBalance?.data?.nTokenBalance > nft?.nBasePrice) {
          fixItems();
        } else {
          alert("Inefficient Token balance");
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  //RaffleBuy Items
  const raffleBuyItemHandler = () => {
    const token = localStorage.getItem("token");
    try {
      if (!token) {
        alert("Please Login");
      } else {
        raffleItems();
      }
    } catch (error) {
      alert(error);
    }
  };

  //Bid Items
  const bidItemHandler = () => {
    const token = localStorage.getItem("token");
    try {
      if (!token) {
        alert("Please Login");
      } else {
        bidItems();
      }
    } catch (error) {
      alert(error);
    }
  };

  //Raffle Increment
  let increment = () => {
    try {
      if (
        quantity < nft?.nTicketsPerUser ||
        nft.nCountOfTickets === 0 ||
        nft?.nTicketsPerUser === 0
      ) {
        setQuantity(quantity + 1);
        setTicketAmount(ticketAmount + nft?.nPricePerTicket);
      } else if (quantity === nft.nCountOfTickets) {
        setTicketAmount(nft.nCountOfTickets);
        alert("No Tickets Available");
      } else {
        alert("Maximum Tickets purchase limit is exceed");
      }
    } catch (error) {
      alert(error);
    }
  };

  //Raffle Decrement
  let decrement = () => {
    try {
      if (quantity === 0) {
        setTicketAmount(0);
      } else if (quantity > 0) {
        setQuantity(quantity - 1);
        setTicketAmount(ticketAmount - nft?.nPricePerTicket);
      } else {
        alert("Please Purchse Ticket");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {/* fixed Items */}
      {nft.eSaleType === "fixed" ? (
        <>
          <div className="img-box">
            <img src={nft?.sImage} alt="sneakpeek_avatar" />
          </div>
          <div className="info-box">
            <h5>{nft.sTitle}</h5>
            <h6>{nft.nBasePrice}</h6>
            <div className="active-btn-box large-btn shop-button">
              <button
                className="active-btn"
                type="button"
                onClick={fixedBuyItemHandler}
              >
                {" "}
                Buy Now{" "}
              </button>
            </div>
          </div>
        </>
      ) : // Bid Items
      nft.eSaleType === "auction" ? (
        <>
          <div className="img-box">
            <img src={nft?.sImage} alt="sneakpeek_avatar" />
          </div>
          <div className="info-box">
            <h5>{nft.sTitle}</h5>
            <h6>
              {nft.nMinBidAmount <= bidAmount ? (
                <div>{bidAmount}</div>
              ) : (
                <div>{nft.nMinBidAmount}</div>
              )}
            </h6>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-box">
                <input
                  required
                  name="bidAmount"
                  value={bidAmount}
                  type="number"
                  className="form-control-box"
                  placeholder="Bid Amount..."
                  onChange={(e) => setBidAmount(e.target.value)}
                />
                <div className="active-btn-box">
                  <button
                    onClick={bidItemHandler}
                    className="active-btn"
                    type="submit"
                  >
                    {" "}
                    Bid{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      ) : (
        //Raffle Items
        <>
          <div className="img-box">
            <img src={nft?.sImage} alt="sneakpeek_avatar" />
          </div>
          <div className="info-box">
            <h5>{nft.sTitle}</h5>
            <h6>{ticketAmount}</h6>
            <div className="inc-dec-box">
              <div className="min-plus-btn">
                <button className="dec-btn" type="button" onClick={decrement}>
                  -
                </button>
                <span className="amount-box">{quantity}</span>
                <button className="inc-btn" type="button" onClick={increment}>
                  +
                </button>
              </div>
              <div className="active-btn-box mt-0">
                <button
                  className="active-btn"
                  type="button"
                  onClick={raffleBuyItemHandler}
                >
                  {" "}
                  Buy Now{" "}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

CatogeryItems.propTypes = {
  nft: PropTypes.object,
};
