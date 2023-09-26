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

//Buy Items List
export const buyItemReducers = (state = {}, action) => {
  switch (action.type) {
    case BUYITEM_LIST_REQUEST:
      return state;
    case BUYITEM_LIST:
      return { ...state, buyItem: action.payload };
    case BUYITEM_LIST_FAIL:
      return { state, error: action.payload };
    default:
      return state;
  }
};

//Bid Items List
export const bidItemReducers = (state = {}, action) => {
  switch (action.type) {
    case BIDITEM_LIST_REQUEST:
      return state;
    case BIDITEM_LIST:
      return { ...state, bidItem: action.payload };
    case BIDITEM_LIST_FAIL:
      return { state, error: action.payload };
    default:
      return state;
  }
};

//Raffle Items List
export const raffleItemReducers = (state = {}, action) => {
  switch (action.type) {
    case RAFFLE_LIST_REQUEST:
      return state;
    case RAFFLE_LIST:
      return { ...state, raffleItem: action.payload };
    case RAFFLE_LIST_FAIL:
      return { state, error: action.payload };
    default:
      return state;
  }
};

//Token Balance
export const tokenBalanceReducers = (state = {}, action) => {
  switch (action.type) {
    case TOKEN_BALANCE_REQUEST:
      return state;
    case TOKEN_BALANCE:
      return { ...state, tokenBalance: action.payload };
    case TOKEN_BALANCE_FAIL:
      return { state, error: action.payload };
    default:
      return state;
  }
};

//Client user Balance
export const clientUserProfileReducers = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_PROFILE_REQUEST:
      return state;
    case CLIENT_PROFILE_SUCCESS:
      return { ...state, clientProfile: action.payload };
    case CLIENT_PROFILE_FAIL:
      return { state, error: action.payload };
    default:
      return state;
  }
};
