import {
  LOGIN_USER_REQUEST,
  LOGIN_USER,
  LOGIN_USER_FAIL,
} from "../constants/nftsConstants";

//Login
export const loginReducers = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return state;
    case LOGIN_USER:
      return { ...state, loginUser: action.payload };
    case LOGIN_USER_FAIL:
      return { state, error: action.payload };
    default:
      return state;
  }
};
