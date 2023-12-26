import React from "react";
import "./BlogSummary.css";
const BlogSummary = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <div className="bookmarked">
        <h3>{blog.article}</h3>
      </div>
    </div>
  );
};

export default BlogSummary;
