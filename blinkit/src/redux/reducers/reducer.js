import countReducer from "./Inc_Dec";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    countReducer
});

export default rootReducer;