import axios from "axios";
import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  SEARCH_POST_ERROR,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
} from "./postActionTypes";

const apiURL = "https://jsonplaceholder.typicode.com/posts";

//1. fetch posts (request started, success, error)
//request started
const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};
//success
const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};
//error action creator
const fetchPostsError = (error) => {
  return {
    type: FETCH_POSTS_ERROR,
    payload: error,
  };
};

//fetch posts action
export const fetchPostsAction = () => {
  return async (dispatch) => {
    //request action
    dispatch(fetchPostsRequest());
    try {
      const res = await axios.get(apiURL);
      //success action
      dispatch(fetchPostsSuccess(res.data));
    } catch (error) {
      //error action
      dispatch(fetchPostsError(error));
    }
  };
};

//2. fetch post (request started, success, error)
const fetchPostRequest = () => {
  return {
    type: SEARCH_POST_REQUEST,
  };
};

const fetchPostSuccess = (post) => {
  return {
    type: SEARCH_POST_SUCCESS,
    payload: post,
  };
};

const fetchPostError = (error) => {
  return {
    type: SEARCH_POST_ERROR,
    payload: error,
  };
};

export const fetchPostAction = (id) => {
  return async (dispatch) => {
    dispatch(fetchPostRequest());
    try {
      const res = await axios.get(`${apiURL}/${id}`);

      dispatch(fetchPostSuccess(res.data));
    } catch (error) {
      dispatch(fetchPostError(error));
    }
  };
};
