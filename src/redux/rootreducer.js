import { combineReducers } from "redux";
import { productReducer, productsReducer } from "./reducer";


export const rootReducer = combineReducers({
    Products: productsReducer,
    Product: productReducer
})