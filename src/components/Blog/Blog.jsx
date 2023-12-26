import React, { useEffect, useState } from "react";
import "./Blog.css";
import Post from "../Post/Post";
import BlogSummary from "../BlogSummary/BlogSummary";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);

  const handleClick = (blog) => {
    if (!bookmarkedBlogs.includes(blog)) {
      const updatedBookmarkedBlogs = [...bookmarkedBlogs, blog];
      setBookmarkedBlogs(updatedBookmarkedBlogs);
    }
  };

  return (
    <div className="blog-container">
      <div className="blog-info">
        {blogs.map((blog) => (
          <Post key={blog.id} blog={blog} handleClick={handleClick}></Post>
        ))}
      </div>
      <div className="blog-summary">
        <h2>Bookmarked Blogs: {bookmarkedBlogs.length}</h2>

        <div className="bookmarked-blogs">
          {bookmarkedBlogs.map((blog) => (
            <BlogSummary key={blog.id} blog={blog}></BlogSummary>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
