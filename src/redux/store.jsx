import {configureStore} from "@reduxjs/toolkit";
import weatherSlice from "./Weather/weatherSlice"


export const store = configureStore({
    reducer : {
        weather : weatherSlice
        
    }
})