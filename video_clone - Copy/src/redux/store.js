import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer as videoReducer } from "./VideoReducer/reducer";

const rootReducer = combineReducers({ videoReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


