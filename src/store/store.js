import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./createSlice";

const store = configureStore({
    reducer : {
        allCart : cartSlice,
    }
})

export default store;