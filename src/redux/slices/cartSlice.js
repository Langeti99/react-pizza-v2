import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   items: [],
   totalPrice: 0,
   totalCount: 0,
}

const updateTotal = (state) => {
   state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.count , 0);
   state.totalCount = state.items.reduce((count, item) => count + item.count , 0 );
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItem(state, {payload}) {
         const findItem = state.items.find(obj => obj.id === payload.id)
         if(findItem) {
            findItem.count++;
         } else {
            state.items.push({
               ...payload,
               count: 1
            })
         }
         updateTotal(state);
      },
      removeItemCount(state, {payload}) {
         const findItem = state.items.find(obj => obj.id === payload)
         if(findItem){
            findItem.count--;
            updateTotal(state);
            if(findItem.count < 1){
               findItem.count = 1;
               updateTotal(state);
               if(window.confirm('Удалити піццу з корзини?')){
                  state.items = state.items.filter(obj => obj.id !== payload)
                  updateTotal(state);
               }
            }
         }
      },
      removeItem(state, {payload}){
         state.items = state.items.filter(obj => obj.id !== payload);
         updateTotal(state);
      },
      clearItems(state){
         state.items = [];
         state.totalCount = 0;
         state.totalPrice = 0;
      }
   }
})

export const  { addItem, removeItem, clearItems, removeItemCount } = cartSlice.actions;

export default cartSlice.reducer;