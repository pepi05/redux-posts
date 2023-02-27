import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  SEARCH_POST_ERROR,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
} from "../actions/postActionTypes";

//initial state
const initialState = {
  loading: false,
  error: "",
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        posts: [],
        error: action.payload,
        loading: false,
      };
    //==SEARCH SINGLE POST
    case SEARCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_POST_SUCCESS:
      return {
        ...state,
        posts: [action.payload],
        loading: false,
        error: "",
      };
    case SEARCH_POST_ERROR:
      return {
        ...state,
        posts: [],
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
