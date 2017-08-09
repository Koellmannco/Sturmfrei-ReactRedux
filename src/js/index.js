import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

const reducer = (state={}, action) => {

  return state
}


const middleware = applyMiddleware(thunk, logger())
const store = createStore(reducer, middleware)

store.dispatch((dispatch) => {
  dispatch({type: "FETCH_USERS_START"})
  axios.get("http://rast.learncode.academy/api/arbrog/users")
    .then((response)=> {
      dispatch({type: "RECEIVE_USERS", payload: response.data})
    })
    .catch((err) =>{
      dispatch({type: "FETCH_USERS_ERROR", payload: err})
    })
  //do something sync
  dispatch({type: "BAR"})
})
