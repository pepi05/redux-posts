import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPostAction } from "../redux/actions/postActions";
import "./Form.css";

const SearchPost = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      return alert("Please provide a value");
    }
    dispatch(fetchPostAction(search));
  };

  return (
    <div className="form-header">
      <div>
        <h2>React Redux Project</h2>
        <p>
          React Redux project that fetches data with search functionality from
          an API
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for a post id"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchPost;
