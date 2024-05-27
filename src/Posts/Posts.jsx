import React from "react";
import "./Posts.css";
import Post from "../pages/Post/Post"
import music from "../images/music.jpg";
import life from "../images/life.jpg";
import tech from "../images/tech.jpg";
import politics from "../images/politics.jpg";
import travel from "../images/travel.jpg";
import style from "../images/style.jpg";
import sports from "../images/sports.jpg";

export default function Posts() {
  const posts = [
    {
      title: "Music Story",
      category: "Music",
      description:
        "In the world of music, melodies intertwine with emotions, creating harmonies that resonate deep within the soul.",
      image: music,
    },
    {
      title: "Life Journey",
      category: "Life",
      description:
        "Life is a journey filled with unexpected twists and turns, each moment offering lessons to be learned and memories to be cherished.",
      image: life,
    },
    {
      title: "Tech Talk",
      category: "Tech",
      description:
        "In the realm of technology, innovation knows no bounds, paving the way for a future where possibilities are limitless and connectivity is seamless.",
      image: tech,
    },
    {
      title: "Political Insights",
      category: "Politics",
      description:
        "Politics is the arena where ideas clash, ideologies collide, and decisions shape the course of nations.",
      image: politics,
    },
    {
      title: "Travel Adventures",
      category: "Travel",
      description:
        "Travel opens the door to new horizons, where each destination is a story waiting to be told and every journey is an adventure.",
      image: travel,
    },
    {
      title: "Style Statement",
      category: "Style",
      description:
        "Style is more than just fashion; it's a reflection of personality, a celebration of individuality, and an expression of creativity.",
      image: style,
    },
    {
      title: "Sports Saga",
      category: "Sports",
      description:
        "In the world of sports, athletes defy limits, push boundaries, and inspire greatness, proving that with dedication and determination, anything is possible.",
      image: sports,
    },
  ];

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          category={post.category}
          description={post.description}
          image={post.image}
        />
      ))}
    </div>
  );
}
