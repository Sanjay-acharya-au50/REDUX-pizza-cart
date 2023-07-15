import {createSlice} from '@reduxjs/toolkit';
import {data} from '../components/data'

const initialState = {
    cart : [],
    items : data,
    quanity : 0,
    totalQuantity : 0,
    totalPrice : 0,
}

export const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        addToCart : (state,action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id)
            // console.log(find)
            if(find >= 0){
                // error
                state.cart[find].quanity += 1;
            }else{

                state.cart.push(action.payload)
            }
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
              (cartTotal, cartItem) => {
                // console.log("carttotal", cartTotal);
                // console.log("cartitem", cartItem);
                const { price, quanity } = cartItem;
                // console.log(price, quanity);
                const itemTotal = price * quanity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity += quanity;
                return cartTotal;
              },
              {
                totalPrice: 0,
                totalQuantity: 0,
              }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
          },
          removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
          },
          increaseQuantity : (state,action) => {
            state.cart = state.cart.map((item)=>{
                if( item.id === action.payload){
                    return {...item, quanity : item.quanity+1}
                }
                return item
            })
          },
          decreaseQuantity : (state,action) => {
            console.log(action.payload)

              state.cart = state.cart.map((item)=>{
                if(item.quanity > 1 && item.id === action.payload){
                  console.log(item.quanity)
                  return {...item, quanity : item.quanity-1}
                }
                return item


            })

             
          }
    }
})
export const {addToCart,getCartTotal,removeItem,increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
 