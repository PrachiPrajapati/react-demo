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

//Items List
export const itemsReducers = (state = {}, action) => {
  switch (action.type) {
    case LIST_ITEMS_REQUEST:
      return state;
    case LIST_ITEMS:
      return { ...state, nfts: action.payload };
    case LIST_ITEMS_FAIL:
      return { state, error: action.payload };
    default:
      return state;
  }
};

//Transaction List
export const transactionReducers = (state = {}, action) => {
  switch (action.type) {
    case TRANSACTION_LIST_REQUEST:
      return state;
    case TRANSACTION_LIST:
      return { ...state, transactionItems: action.payload };
    case TRANSACTION_LIST_FAIL:
      return { state, error: action.payload };
    default:
      return state;
  }
};

//Catogery Item List
export const catogeryItemsReducers = (state = {}, action) => {
  switch (action.type) {
    case CATOGERY_ITEMS_REQUEST:
      return state;
    case CATOGERY_ITEMS:
      return { ...state, catogeryItemsDetails: action.payload };
    case CATOGERY_ITEMS_FAIL:
      return { state, error: action.payload };
    default:
      return state;
  }
};
