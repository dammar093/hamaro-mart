import {configureStore} from "@reduxjs/toolkit";
import poductReducer from "../features/productSlice";
const store = configureStore({
  reducer:{
    products:poductReducer
  }
});

export default store;