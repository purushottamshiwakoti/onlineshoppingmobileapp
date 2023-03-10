import { createStore } from "redux";
import { reducers } from "../reducer/Reducers";
import { Reducers2 } from "../reducer/Reducer2";
import { combineReducers } from "redux";
import { AddressReducer } from "../reducer/AddressReducer";

const routeReducer = combineReducers({ reducers, Reducers2, AddressReducer });

const store = createStore(routeReducer);

export default store;
