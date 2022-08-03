import { configureStore } from "@reduxjs/toolkit";
import sliceCart from './slice'

const store = configureStore({
    reducer : {
        cart:sliceCart
    }
})

export default store