import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchPost from "./SearchPost";
import "./Posts.css";
import { fetchPostsAction } from "../redux/actions/postActions";

const PostsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsAction());
  }, []);

  //get data from store
  const { loading, error, posts } = useSelector((data) => data);
  return (
    <>
      <SearchPost />
      <div className="posts-list">
        <h1>Total Posts 100</h1>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2 style={{ color: "red" }}>
            {error.response.status && "No Post Found"}
          </h2>
        ) : (
          posts.map((post) => {
            return (
              <div className="post-details">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default PostsList;
