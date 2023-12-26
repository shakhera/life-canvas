import React from "react";
import "./BlogSummary.css";
const BlogSummary = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <div className="bookmarked-blogs">
        <h3>{blog.article}</h3>
      </div>
    </div>
  );
};

export default BlogSummary;
