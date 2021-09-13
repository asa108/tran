import { createStore, combineReducers } from "redux";
import entriesReducer from "../reducers/entiries.reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const configStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer
    }),
    composeWithDevTools()
  );
};

export default configStore;
