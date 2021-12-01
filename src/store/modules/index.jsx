import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducerCart from "./reducer";

const reducers = combineReducers({ result: reducerCart });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
