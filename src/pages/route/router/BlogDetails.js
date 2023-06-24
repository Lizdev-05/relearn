import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "./Data";

const BlogDetails = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [details, setDetails] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const thisBlog = blogs.find((blog) => blog.id === parseInt(id));
    setTitle(thisBlog.title);
    setAuthor(thisBlog.author);
    setDetails(thisBlog.details);
  });
  return (
    <div className="container --p">
      <h1 className="--text-center"> {title}</h1>
      <hr className="--bg-dark" />
      <p className="--p">
        <b>Written by:</b> {author}
      </p>
      <br />
      <p>{details}</p>

      <div>
        <Link to="/blogs"> {`<<< Back to Blogs`}</Link>
      </div>
    </div>
  );
};

export default BlogDetails;
