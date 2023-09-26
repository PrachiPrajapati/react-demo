import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  itemsReducers,
  transactionReducers,
  catogeryItemsReducers
} from "./reducers/nftItemsReducers";
import {
  bidItemReducers,
  buyItemReducers,
  clientUserProfileReducers,
  raffleItemReducers,
  tokenBalanceReducers,
} from "./reducers/buyBidItemReducers";
import { loginReducers } from "./reducers/loginUserReducers";

const reducer = combineReducers({
  loginUsers: loginReducers,
  nftItems: itemsReducers,
  transactionItems: transactionReducers,
  buyItems: buyItemReducers,
  bidItems: bidItemReducers,
  raffleItems: raffleItemReducers,
  tokenBalanceTotal: tokenBalanceReducers,
  catogeryItems:catogeryItemsReducers,
  client:clientUserProfileReducers
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
