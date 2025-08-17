import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user.slice.js"
import moviesReducer from "./movies.slice.js"
import wishListReducer from "./wishlist.slice.js"
import appConfigReducer from "./appConfig.slice.js"
import gptReducer from "./gpt.slice.js"

 const store = configureStore({
  reducer: {
    user:userReducer,
    movies:moviesReducer,
    wishList:wishListReducer,
    appConfig:appConfigReducer,
    gpt:gptReducer
  },
})  

export default store;