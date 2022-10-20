import axios from "axios"
import {
    USER_FETCH_FAILURE,
    USER_FETCH_REQUEST,
    USER_FETCH_SUCCESS,
} from "./actionTypes"

export const userFetchRequest = () => {
    return {
        type: USER_FETCH_REQUEST,
        payload: "",
    }
}
export const userFetchSuccess = (users) => {
    return {
        type: USER_FETCH_SUCCESS,
        payload: users,
    }
}
export const userFetchFailure = (error) => {
    return {
        type: USER_FETCH_FAILURE,
        payload: error,
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(userFetchRequest())
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const users = response.data
                dispatch(userFetchSuccess(users))
            })
            .catch((error) => {
                dispatch(userFetchFailure(error.message))
            })
    }
}
