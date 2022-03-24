import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_EDU,
  NO_EDU,
  GET_EXP,
  NO_EXP,
  GET_PRJ,
  NO_PRJ,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  edu: {},
  exp: {},
  prj: {},
  loading: true,
  error: {},
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
        edu: {},
        exp: {},
        prj: {},
        error: {},
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
        edu: {},
        exp: {},
        prj: {},
        error: {},
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
        error: {},
      };
    case PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        profile: null,
        edu: {},
        exp: {},
        prj: {},
        error: payload,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        edu: {},
        exp: {},
        prj: {},
        error: {},
      };
    case GET_EDU:
      return {
        ...state,
        edu: payload,
        exp: {},
        prj: {},
        error: {},
      };
    case NO_EDU:
      return {
        ...state,
        edu: {},
        exp: {},
        prj: {},
        error: payload,
      };
    case GET_EXP:
      return {
        ...state,
        edu: {},
        exp: payload,
        prj: {},
        error: {},
      };
    case NO_EXP:
      return {
        ...state,
        edu: {},
        exp: {},
        prj: {},
        error: payload,
      };
    case GET_PRJ:
      return {
        ...state,
        edu: {},
        exp: {},
        prj: payload,
        error: {},
      };
    case NO_PRJ:
      return {
        ...state,
        edu: {},
        exp: {},
        prj: {},
        error: payload,
      };
    default:
      return state;
  }
}

export default profileReducer;
