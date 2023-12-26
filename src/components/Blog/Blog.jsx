import React, { useEffect, useState } from "react";
import "./Blog.css";
import Post from "../Post/Post";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="blog-container">
      <div className="blog-info">
        {blogs.map((blog) => (
          <Post key={blog.id} blog={blog}></Post>
        ))}
      </div>
      <div className="blog-summary">
        <h2>Blog Summary</h2>
      </div>
    </div>
  );
};

export default Blog;
