import { combineReducers } from "redux";
import expenseReducer from "./expense-reducer";
import sceneReducer from "./scene-reducer";

const rootReducer = combineReducers({
    'expense' : expenseReducer,
    'scene' : sceneReducer
})

export default rootReducer;