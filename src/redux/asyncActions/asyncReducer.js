import {
    USER_FETCH_FAILURE,
    USER_FETCH_REQUEST,
    USER_FETCH_SUCCESS,
} from "./actionTypes"
import axios from "axios"

const initialState = {
    loading: false,
    users: [],
    error: ``,
}

export const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_FETCH_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: "",
            }
        case USER_FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                users: [],
            }
        default:
            return state
    }
}
