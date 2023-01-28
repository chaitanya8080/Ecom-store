import { FETCH_FAILURE, FETCH_QUERY_SUCEESS, FETCH_REQUEST, FETCH_SUCCESS } from "./ActionType";

const initState = {
  isLoading: false,
  isError: false,
  product: [],
  queryProduct : [],
};

function Reducer(state = initState, action) {
//   console.log("action: ", action);
//   console.log("state: ", state);
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: action.payload,
      };
      case FETCH_QUERY_SUCEESS:
      return {
        ...state,
        isLoading: false,
        queryProduct: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}

export default Reducer;
