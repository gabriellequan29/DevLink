import api from "../components/utils/api";
import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_REPOS,
  NO_REPOS,
} from "./types";

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await api.get("/profile/myprofile");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.response,
    });
  }
};

// Get all profiles
export const getProfiles = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await api.get("/profile");

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.response,
    });
  }
};

// Get profile by ID
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await api.get(`/profile/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.response,
    });
  }
};

// // Create or update profile
// export const createProfile =
//   (formData, navigate, edit = false) =>
//   async (dispatch) => {
//     try {
//       const res = await api.post("/profile", formData);

//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data,
//       });

//       if (!edit) {
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       dispatch({
//         type: PROFILE_ERROR,
//         payload:
//           error.response && error.response.data.errors
//             ? error.response.data.errors
//             : error.response,
//       });
//     }
//   };
