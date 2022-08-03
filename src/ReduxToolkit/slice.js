import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const sliceChart = createSlice({
  name: "cart",
  initialState: { counter: 0, cartItems: [], totalPrice: 0 },
  reducers: {
    addCart: (state, action) => {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        toast.info(`Increased ${action.payload.title.substring(0,12)} Cart`, {
          position: "bottom-left",
        });
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, amount: 1 },
        ];
        toast.success(`${action.payload.title.substring(0,12)} added to cart`, {
          position: "bottom-left",
        });
      }
    },
    getCartTotal: (state) => {
      let { counter, totalPrice } = state.cartItems.reduce(
        (cart, items) => {
          const { amount, price } = items;
          cart.totalPrice += amount * price;

          cart.counter += amount;

          return cart;
        },
        {
          counter: 0,
          totalPrice: 0,
        }
      );
      state.counter = counter;
      state.totalPrice = Math.round(totalPrice);
    },
    removeFromCart: (stata, action) => {
      stata.cartItems = stata.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      toast.success(`${action.payload.title.substring(0,12)} added to cart`, {
        position: "bottom-left",
      });
    },
    clearCart: (state) => {
      state.cartItems = [];
      toast.error(`Clear All`, {
        position: "bottom-left",
      });
    },
    increase: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id ? { ...item, amount: item.amount + 1 } : item
      );
      toast.success(` ${action.payload.title.substring(0,12)} increase cart`, {
        position: "bottom-left",
      });
    },
    decrease: (state, action) => {
      state.cartItems = state.cartItems
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount - 1 }
            : item
        )
        .filter((item) => {
          if (item.amount === 0) {
            toast.error(` ${action.payload.title.substring(0,12)} removed Fromcart`, {
              position: "bottom-left",
            });
            return item.id !== action.payload.id;
            
          } else {
            toast.info(`Decrease ${action.payload.title.substring(0,12)} quantity`, {
              position: "bottom-left",
            });
            return item;
          }
        });
    },
  },
});
export const {
  addCart,
  getCartTotal,
  removeFromCart,
  clearCart,
  increase,
  decrease,
} = sliceChart.actions;
export default sliceChart.reducer;
