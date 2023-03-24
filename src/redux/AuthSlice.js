import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// import { API_LOGIN, LOGIN_F, LOGIN_S, LS_AUTHTOKEN, LS_USER } from "../constants";

// const API_LOGIN = "";
// const LOGIN_F = "";
// const LOGIN_S = "";

// const LS_AUTHTOKEN = "";
// const LS_USER = "";

// export const loginAction = (data) => ({
//   type: "API",
//   payload: {
//     url: API_LOGIN,
//     method: "POST",
//     data: data,
//     hideLoader: false,
//     success: (data) => ({
//       type: LOGIN_S,
//       payload: data,
//     }),
//     error: (data) => ({
//       type: LOGIN_F,
//       payload: {},
//     }),
//   },
// });

const initialState = {
  // Global loader for api
  isLoading: false,

  // Auth Data
  isLoggedIn: false,
  userData: {
    email: "",
    password: "",
  },

  isLoggedin: false,
};

// Reducer
const AuthSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    loaderChange: (state, payload) => {
      state.isLoading = payload.payload;
    },

    userInfo: (state, action) => {
      state.userData = action.payload;
    },

    onLoggedin: (state, action) => {
      state.isLoggedin = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(LOGIN_S, (state, action) => {
  //     // Default header for auth
  //     axios.defaults.headers.common["Authorization"] =
  //       action.payload.data.token;
  //     localStorage.setItem(
  //       LS_AUTHTOKEN,
  //       JSON.stringify(action.payload.data.token)
  //     );
  //     localStorage.setItem(LS_USER, JSON.stringify(action.payload.data));

  //     state.userData = action.payload;
  //     state.isLoggedIn = true;
  //   });
  //   builder.addCase(LOGIN_F, (state, action) => {
  //     // remove items on logout
  //     delete axios.defaults.headers.common["Authorization"];
  //     localStorage.removeItem(LS_AUTHTOKEN);
  //     localStorage.removeItem(LS_USER);

  //     state.userData = {};
  //     state.isLoggedIn = false;
  //   });
  // },
});

export const { loaderChange, userInfo, onLoggedin } = AuthSlice.actions;
export default AuthSlice.reducer;
