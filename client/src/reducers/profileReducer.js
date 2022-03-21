import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  NO_REPOS,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
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
        error: {},
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
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
        error: payload,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        error: {},
      };
    default:
      return state;
  }
}

export default profileReducer;
