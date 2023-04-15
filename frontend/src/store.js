// Import necessary libraries and functions
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "./reducers/productReducers";

// Combine the reducers
const reducer = combineReducers({
  productList: productListReducer,
});

// Set the initial state
const initialState = {};

// Define the middleware
const middleware = [thunk];

// Create the store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Export the store
export default store;
