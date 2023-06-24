import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div className="--center-all">
      <h1 className="--text-center"> {title}</h1>
      <hr />
      <p>
        <b>Written by:</b> {author}
      </p>
      <br />
      <p>{details}</p>
    </div>
  );
};

export default BlogDetails;
