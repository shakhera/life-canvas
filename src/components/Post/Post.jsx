import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBible } from "@fortawesome/free-solid-svg-icons";
import "./Post.css";
const Post = (props) => {
  const {
    authorImg,
    authorName,
    img,
    article,
    content,
    publish_date,
    reading_time,
  } = props.blog;
  const handleClick = props.handleClick;

  return (
    <div className="post">
      <img className="image" src={img} alt="" />
      <div className="author-info">
        <div className="author">
          <img className="img_id" src={authorImg} alt="" />
          <div className="author-container">
            <div>
              <h4>{authorName}</h4>
              <p>{publish_date}</p>
            </div>
          </div>
        </div>
        <p>
          {reading_time}{" "}
          <button onClick={() => handleClick(props.blog)}>
            <FontAwesomeIcon icon={faBookBible} />
          </button>
        </p>
      </div>
      <h4 className="article">{article}</h4>
      <p className="post-text">
        {content}
        <a href="#">Read More</a>
      </p>
    </div>
  );
};

export default Post;
