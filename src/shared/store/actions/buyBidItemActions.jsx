import {
  BUYITEM_LIST_REQUEST,
  BUYITEM_LIST,
  BUYITEM_LIST_FAIL,
  BIDITEM_LIST_REQUEST,
  BIDITEM_LIST,
  BIDITEM_LIST_FAIL,
  RAFFLE_LIST_REQUEST,
  RAFFLE_LIST,
  RAFFLE_LIST_FAIL,
  TOKEN_BALANCE_REQUEST,
  TOKEN_BALANCE,
  TOKEN_BALANCE_FAIL,
  CLIENT_PROFILE_REQUEST,
  CLIENT_PROFILE_SUCCESS,
  CLIENT_PROFILE_FAIL,
} from "../constants/nftsConstants";
import Axios, { ClientAxios } from "../../../api/BaseUrl";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

//Buy Items List
export const buyItemList = (_id, quantity) => async (dispatch) => {
  try {
    dispatch({
      type: BUYITEM_LIST_REQUEST,
    });

    const { data } = await Axios.post(`nft/buy/${_id}`, {
      nQuantity: quantity,
    });

    dispatch({ type: BUYITEM_LIST, payload: data });
  } catch (error) {
    dispatch({
      type: BUYITEM_LIST_FAIL,
      payload: error,
    });
    toast.error(error?.response?.data?.message)
  }
};

//Bid Items List
export const bidItemList = (_id, bidAmount) => async (dispatch) => {
  try {
    dispatch({
      type: BIDITEM_LIST_REQUEST,
    });

    const { data } = await Axios.post(`nft/bid/${_id}`, {
      nAmount: bidAmount,
    });

    dispatch({ type: BIDITEM_LIST, payload: data });
  } catch (error) {
    dispatch({
      type: BIDITEM_LIST_FAIL,
      payload: error,
    });
    toast.error(error?.response?.data?.message)
  }
};

//Raffle Items List
export const raffleItemList = (_id, quantity) => async (dispatch) => {
  try {
    dispatch({
      type: RAFFLE_LIST_REQUEST,
    });

    const { data } = await Axios.post(`nft/buy/ticket/${_id}`, {
      nQuantity: quantity,
    });

    dispatch({ type: RAFFLE_LIST, payload: data });
  } catch (error) {
    dispatch({
      type: RAFFLE_LIST_FAIL,
      payload: error,
    });
    toast.error(error?.response?.data?.message)
  }
};

//Token Balance
export const tokenBalances = () => async (dispatch) => {
  try {
    dispatch({
      type: TOKEN_BALANCE_REQUEST,
    });

    const { data } = await Axios.get("profile");
    dispatch({ type: TOKEN_BALANCE, payload: data });
  } catch (error) {
    dispatch({
      type: TOKEN_BALANCE_FAIL,
      payload: error,
    });
    toast.error(error?.response?.data?.message)
  }
};

//Client user Balance
export const clientUserProfile = (address) => async (dispatch) => {
  try {
    dispatch({
      type: CLIENT_PROFILE_REQUEST,
    });

    const { data } = await ClientAxios.get(`accounts/${address}/?inclA=true&inclT=true`);
    dispatch({ type: CLIENT_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CLIENT_PROFILE_FAIL,
      payload: error,
    });
    toast.error(error?.response?.data?.message)
  }
};
