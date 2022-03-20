import { createStore, combineReducers } from "redux";
import { challengeReducer } from "./reducer";

const rootReducer = combineReducers({
    challenges : challengeReducer
});

export const store = createStore(rootReducer);
