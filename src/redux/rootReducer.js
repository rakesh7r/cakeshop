import { combineReducers } from "redux"
import { asyncReducer } from "./asyncActions/asyncReducer"
import { cakeReducer } from "./cake/cakeReducer"
import { iceCreamReducer } from "./IceCream/iceCreamReducer"

export const rootReducer = combineReducers({
    iceCream: iceCreamReducer,
    cake: cakeReducer,
    asyncReducer: asyncReducer,
})
