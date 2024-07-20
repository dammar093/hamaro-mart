import {createSlice} from "@reduxjs/toolkit";
import data from "../data/data";

const initialState ={
  products:data,
  search:[],
  searchCategory:[]
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
      state.search = state.products.filter(item => (item.title.toLowerCase().trim().includes(action.payload) || item.category.toLowerCase().trim().includes(action.payload)))
    },
    searchByCategory:(state,action)=>{
      state.searchCategory = state.products.filter(item=>item.category.toLowerCase().trim() === action.payload)
    }
  }
});

export const {setProducts,getAllProducts,searchedProducts,searchByCategory} = productSlice.actions;

export default productSlice.reducer