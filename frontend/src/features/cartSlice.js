import {createSlice} from "@reduxjs/toolkit";

const initialState ={
  cart:[]
}

const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:{
    addToCart:(state,action)=>{
      state.cart= action.payload;
    },
    removeFromCart:(state,action)=>{
      state.cart = state.cart.filter(item=>item.id !== action.payload);
    },
    increaseQuantity:(state,action)=>{
      const index = state.cart.findIndex(action.payload);
      state.cart[index].quanity +=1
    }
  }
})

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;