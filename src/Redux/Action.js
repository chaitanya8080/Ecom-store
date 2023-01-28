import { FETCH_FAILURE, FETCH_QUERY_SUCEESS, FETCH_REQUEST, FETCH_SUCCESS } from "./ActionType"

export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST,
    }
}

export const fetchSuccess = (payload) => {
    return {
        type: FETCH_SUCCESS,
        payload,
    }
}

export const fetchQuerySuccess = (payload) => {
    return {
        type: FETCH_QUERY_SUCEESS,
        payload,
    }
}

export const fetchFailure = () => {
    return {
        type: FETCH_FAILURE,
    }
}