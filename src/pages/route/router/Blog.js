import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { blogs } from "./Data";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <p>This is a blog page</p>

      <article>
        {blogs.map((blog) => {
          const { id, title, author } = blog;
          return (
            <div key={id} className="--card --m --p">
              <h4>{title}</h4>
              <p> By: {author}</p>
              <Link to={`/blog/${id}`}>Read More</Link>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Blog;
