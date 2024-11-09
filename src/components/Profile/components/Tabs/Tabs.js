import { useState } from "react";
import "./tabs.css";

const Tabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("posts");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === "posts" ? "tab--active" : ""}`}
        onClick={() => handleTabClick("posts")}
      >
        Posts
      </button>
      <button
        className={`tab ${activeTab === "replies" ? "tab--active" : ""}`}
        onClick={() => handleTabClick("replies")}
      >
        Replies
      </button>
      <button
        className={`tab ${activeTab === "media" ? "tab--active" : ""}`}
        onClick={() => handleTabClick("media")}
      >
        Media
      </button>
      <button
        className={`tab ${
          activeTab === "likes" ? "tab--active" : ""
        } tabs__likes`}
        onClick={() => handleTabClick("likes")}
      >
        Likes
      </button>
    </div>
  );
};

export default Tabs;
