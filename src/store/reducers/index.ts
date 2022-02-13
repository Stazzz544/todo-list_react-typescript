import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
	todoReducer: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>