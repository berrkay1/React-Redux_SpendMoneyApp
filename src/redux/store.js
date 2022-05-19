import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from '../redux/ProductSlice';


export const store = configureStore({
    reducer:{
        product:ProductSlice,
    }
});