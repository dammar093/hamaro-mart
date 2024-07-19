import {configureStore} from "@reduxjs/toolkit";
import poductReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";

const store = configureStore({
  reducer:{
    products:poductReducer,
    cart:cartReducer
  }
});

export default store;