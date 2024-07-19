import {createSlice} from "@reduxjs/toolkit";

const initialState ={
  cart:[]
}

const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:{
    addToCart:(state,action)=>{
      state.cart.push(action.payload);
    },
    removeFromCart:(state,action)=>{
      state.cart = state.cart.filter(item=>item.id !== action.payload);
    },
    decrementQuantity:(state,action)=>{
      const itemIndex = state.cart.findIndex((item)=>item.id === action.payload)
      if(state.cart[itemIndex].quantity >1){
        state.cart[itemIndex].quantity -=1;
      }
    },
    incrementQuantity:(state,action)=>{
      const itemIndex = state.cart.findIndex((item)=>item.id === action.payload)
      console.log(itemIndex);
      if(itemIndex >=0){
        state.cart[itemIndex].quantity +=1;
      }
    }
  }
})

export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;