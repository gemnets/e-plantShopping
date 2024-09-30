import { configureStore } from '@reduxjs/toolkit'; // Import configureStore
import cartReducer from './CartSlice'; // Adjust the path based on your file structure


const store = configureStore({
    reducer: {
        cart: cartReducer, // Associate the cart reducer with the 'cart' key
    },
});


export default store;
