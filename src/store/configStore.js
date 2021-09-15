import { createStore, combineReducers } from "redux";
import entriesReducer from "../reducers/entiries.reducers";
import modalsReducers from "../reducers/modals.reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const configStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducers
    }),
    composeWithDevTools()
  );
};

export default configStore;
