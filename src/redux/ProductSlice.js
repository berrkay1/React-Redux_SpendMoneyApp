import { createSlice } from "@reduxjs/toolkit";
import { data } from '../data/productsData';

const ProductSlice = createSlice({
    name:'product',
    initialState:{
        items:data,
        money:100,
        initialMoney : 100
    },
    reducers:{
        changeCount: (state,action) => {
            const {id,count} = action.payload;

            const item = state.items.find(item => item.id === id);
            item.count = count;

            let total = 0;
            state.items.map(val => (
                total += Number(val.count) * Number(val.price) 
            ));

            state.money = Number(state.initialMoney) - Number(total);
        }
    }
})

export const {changeCount} = ProductSlice.actions;
export default ProductSlice.reducer;