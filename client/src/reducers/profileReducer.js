import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_EDU,
  NO_EDU,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  edu: {},
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
        edu:{},
        error: {},
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
        edu:{},
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
        edu:{},
        error: payload,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        edu:{},
        error: {},
      };
    case GET_EDU:
      return {
        ...state,
        edu: payload,
        error: {},
      };
    case NO_EDU:
      return {
        ...state,
        edu: {},
        error: {},
      };
    default:
      return state;
  }
}

export default profileReducer;
