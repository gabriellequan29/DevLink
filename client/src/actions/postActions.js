import api from "../components/utils/api";
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./types";

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.get("/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    dispatch({
      type: POST_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.response,
    });
  }
};

// Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    dispatch({
      type: POST_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.response,
    });
  }
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    dispatch({
      type: POST_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.response,
    });
  }
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.delete(`/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });

  } catch (error) {
    if (error.response) {
      console.log(error.response);
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    dispatch({
      type: POST_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.response,
    });
  }
};

// Add post
export const addPost = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/posts", formData);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

  } catch (error) {
    if (error.response) {
      console.log(error.response);
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    dispatch({
      type: POST_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.response,
    });
  }
};

// Get post
export const getPost = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    dispatch({
      type: POST_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.response,
    });
  }
};

// Add comment
export const addComment = (postId, formData) => async (dispatch) => {
  try {
    const res = await api.post(`/posts/comment/${postId}`, formData);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    dispatch({
      type: POST_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.response,
    });
  }
};

// Delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await api.delete(`/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    dispatch({
      type: POST_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.response,
    });
  }
};
