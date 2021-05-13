import { createStore } from "redux";
import rootReducer from "../reducers";

const initialState = {
        'value' : [],
        'isLoading' : false
    };


const store =  createStore(rootReducer,initialState);
export default store;