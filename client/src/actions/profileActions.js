import api from "../components/utils/api";
import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  GET_EDU,
  NO_EDU,
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

// Create or update profile
export const createProfile =
  (formData, navigate, edit = false) =>
  async (dispatch) => {
    try {
      const res = await api.post("/profile", formData);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      navigate("/dashboard");
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

// Add Experience
export const addExperience = (formData, navigate) => async (dispatch) => {
  try {
    const res = await api.put("/profile/experience", formData);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    navigate("/dashboard");
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

// Add Education
export const addEducation = (formData, navigate) => async (dispatch) => {
  try {
    const res = await api.put("/profile/education", formData);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    navigate("/dashboard");
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

// Add Project
export const addProject = (formData, navigate) => async (dispatch) => {
  try {
    const res = await api.put("/profile/project", formData);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    navigate("/dashboard");
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

// Get education by id
export const getEducation = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/profile/education/${id}`);

    dispatch({
      type: GET_EDU,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: NO_EDU,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.response,
    });
  }
};

// Update Education By ID
export const updateEducation = (formData, navigate, id) => async (dispatch) => {
  try {
    const res = await api.put(`/profile/education/${id}`, formData);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    navigate("/dashboard");
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

// Delete experience
export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/profile/experience/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
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

// Delete education
export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/profile/education/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
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

// Delete project
export const deleteProject = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/profile/project/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
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
