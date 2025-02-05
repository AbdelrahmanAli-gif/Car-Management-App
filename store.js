import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./src/slices/carSlice";

const store = configureStore({
    reducer: {
        cars: carReducer
    }
});

export default store;