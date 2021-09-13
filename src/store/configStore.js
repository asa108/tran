import { createStore, combineReducers } from "redux";
import entriesReducer from "../reducers/entiries.reducers";

const configStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer
    })
  );
};

export default configStore;
