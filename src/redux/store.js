// import { applyMiddleware, createStore } from "redux";
// import reducers from "../reducers";

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

import navigationReducer from "../reducers/navigationReducer";
import analyticalReducer from "../reducers/analyticalReducer";
import loginReducer from "../reducers/loginReducer";
import demographicReducer from "../reducers/demographicReducer";
import ioTReducer from "../reducers/ioTReducer";
import mailInboxReducer from "../reducers/mailInboxReducer";
import UIElementsReducer from "../reducers/UIElementsReducer";

import AuthSlice from "./AuthSlice";

// export const store = createStore(reducers, applyMiddleware(thunk));

export const history = createBrowserHistory();

// combineReducers will be handled internally by configureStore
const rootReducer = (history) => ({
  loginReducer: loginReducer,
  navigationReducer: navigationReducer,
  analyticalReducer: analyticalReducer,
  demographicReducer: demographicReducer,
  ioTReducer: ioTReducer,
  mailInboxReducer: mailInboxReducer,
  UIElementsReducer: UIElementsReducer,
  login: AuthSlice,
  router: connectRouter(history),
});

// export const store = configureStore({
//     reducer: {
//         auth: AuthSlice,
//         user: UserSlice,
//     },
//     middleware: [thunk, reduxApiMiddleware]
// })

const preloadedState = {};
export const store = configureStore({
  reducer: rootReducer(history),

  middleware: [thunk, routerMiddleware(history)],
  preloadedState,
});
