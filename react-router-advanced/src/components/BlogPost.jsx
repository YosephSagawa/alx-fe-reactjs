import { useParams } from "react-router-dom";

import React from "react";

const BlogPost = () => {
  const { id } = useParams();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="blog/1">Blog 1</NavLink>
          </li>
          <li>
            <NavLink to="blog/2">Blog 2</NavLink>
          </li>
        </ul>
      </nav>
      <div>BlogPost:{id}</div>
    </div>
  );
};

export default BlogPost;
