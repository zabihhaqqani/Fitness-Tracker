import { combineReducers } from "redux";
import exerciseReducer from "./exercise";
import { foodReducer } from "./food";
import { goalReducer } from "./goal";


const rootReducer = combineReducers({
  exercises:exerciseReducer,
  foodItems:foodReducer,
  goals:goalReducer
});

export default rootReducer;
