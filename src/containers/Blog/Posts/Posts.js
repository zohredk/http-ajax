import React from "react";
import { Link } from "react-router-dom";
import axios from "../../../axios";

import Post from "../../../components/Post/Post";

import "./Posts.css";

class Posts extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    console.log(this.props);
    console.log(this.props.match);

    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((item) => {
          return {
            ...item,
            author: "Zohre",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  selectedPostHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}> Fetching data failed!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((item) => {
        return (
          <Link to={`/${item.id}`} key={item.id}>
            <Post
              title={item.title}
              author={item.author}
              click={() => this.selectedPostHandler(item.id)}
            />
          </Link>
        );
      });
    }

    return <section className="posts">{posts}</section>;
  }
}

export default Posts;
