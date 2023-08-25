import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlices';
import userSlices from './slices/userSlices';

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        user: userSlices.reducer,
    }
});

export default store;
