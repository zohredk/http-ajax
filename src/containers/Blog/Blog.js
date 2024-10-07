import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

import "./Blog.css";

class Blog extends React.Component {
  render() {
    return (
      <div className="blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "new-post",
                    search: "?sort=post",
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" exact Component={Posts} />
          <Route path="/new-post" Component={NewPost} />
          <Route path="/:id" exact Component={FullPost} />
        </Routes>
      </div>
    );
  }
}

export default Blog;
