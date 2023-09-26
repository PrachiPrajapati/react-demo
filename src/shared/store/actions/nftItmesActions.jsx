import {
  LIST_ITEMS_REQUEST,
  LIST_ITEMS,
  LIST_ITEMS_FAIL,
  TRANSACTION_LIST_REQUEST,
  TRANSACTION_LIST,
  TRANSACTION_LIST_FAIL,
  CATOGERY_ITEMS_REQUEST,
  CATOGERY_ITEMS,
  CATOGERY_ITEMS_FAIL,
} from "../constants/nftsConstants";
import Axios from "../../../api/BaseUrl";
import { toast } from "react-toastify";

//Item List
export const itemsList = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_ITEMS_REQUEST,
    });

    const { data } = await Axios.post("nft/list", {
      search: "",
      start: 0,
      length: 10,
      sort: "",
      orderBy: "",
    });

    dispatch({ type: LIST_ITEMS, payload: data });
  } catch (error) {
    dispatch({
      type: LIST_ITEMS_FAIL,
      payload: error,
    });
    toast.error(error?.response?.data?.message)
  }
};

//Transaction List
export const transactionList = () => async (dispatch) => {
  try {
    dispatch({
      type: TRANSACTION_LIST_REQUEST,
    });

    const { data } = await Axios.post("nft/myNft", {
      search: "",
      start: 0,
      length: 10,
      sort: "",
      orderBy: "",
    });

    dispatch({ type: TRANSACTION_LIST, payload: data });
  } catch (error) {
    dispatch({
      type: TRANSACTION_LIST_FAIL,
      payload: error,
    });
    toast.error(error?.response?.data?.message)
  }
};

//Catogery Items
export const catogeryItemsList = () => async (dispatch) => {
  try {
    dispatch({
      type: CATOGERY_ITEMS_REQUEST,
    });

    const { data } = await Axios.post("nft/list/byCategory", {
      search: "",
      start: 0,
      length: 10,
      sort: "",
      orderBy: "",
    });


    dispatch({ type: CATOGERY_ITEMS, payload: data });
  } catch (error) {
    dispatch({
      type: CATOGERY_ITEMS_FAIL,
      payload: error,
    });
    toast.error(error?.response?.data?.message)
  }
};
