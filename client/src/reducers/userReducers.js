import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";
import api from '../components/utils/api';

let tokenFromStorage = null;
let isAuthenticatedFromStorage = null;
let loadingFromStorage = true;
if (localStorage.getItem('token') !== null) {
  tokenFromStorage = localStorage.getItem("token");
  console.log(tokenFromStorage)
  isAuthenticatedFromStorage = true;
  loadingFromStorage = false;
}


const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: payload.token,
        loading: false,
        user: payload,
      };
    case REGISTER_FAIL:
      return { loading: false, error: payload };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAIL:
      return { loading: false, error: payload };
    case AUTH_ERROR:
      return { loading: false, error: payload };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}

export default userReducer;
