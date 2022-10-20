import { BUY_ICECREAM } from "./iceCreamTypes"

const initialState = {
    numberOfIcecreams: 30,
}

export const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - 1,
            }
        default:
            return state
    }
}
