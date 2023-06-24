import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  return (
    <div className="--center-all">
      <h1 className="--text-center">BlogDetails {id}</h1>
    </div>
  );
};

export default BlogDetails;
