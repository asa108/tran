import { createStore, combineReducers, applyMiddleware } from "redux";
import entriesReducer from "../reducers/entiries.reducers";
import modalsReducers from "../reducers/modals.reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducers,
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

export default configStore;
