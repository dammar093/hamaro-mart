import {createSlice} from "@reduxjs/toolkit";
import data from "../data/data";

const initialState ={
  products:data
};

const productSlice = createSlice({
  name:"products",
  initialState,
  reducers:{
    setProducts:(state,action)=>{
      state.products = action.payload;
    },
    getAllProducts : (state,_)=>{
    return state.products;
    },
    searchedProducts :(state,action)=>{
    }
  }
});

export const {setProducts,getAllProducts,searchedProducts} = productSlice.actions;

export default productSlice.reducer