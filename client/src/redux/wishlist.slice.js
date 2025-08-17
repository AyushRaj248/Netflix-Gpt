import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addFavouriteMovie: (state, action) => {
      const isAlreadyInWishlist = state.find(movie => movie.id === action.payload.id);
      if (!isAlreadyInWishlist) {
        state.push(action.payload)

      }
      // console.log(isAlreadyInWishlist);

    },
    removeFavouriteMovie: (state, action) => {
      return state.filter((el) => el.id !== action.payload)
    },
    clearAll: (state, action) => {
      return [];
    },
  },
});

export const { addFavouriteMovie, removeFavouriteMovie, clearAll } = wishListSlice.actions;
export default wishListSlice.reducer;
