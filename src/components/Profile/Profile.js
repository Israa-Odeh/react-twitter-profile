import { useState } from "react";
import { ProfileHeader, Tabs, TopBar, WhoToFollow } from "./components";
import { Post } from "./components/Tabs/components";
import "./profile.css";

const ProfileOverview = ({ recommendedFollowers, profileData }) => {
  const [activeTab, setActiveTab] = useState("posts");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile">
      <TopBar title={profileData.name} postsCount={profileData.postsCount} />
      <ProfileHeader profileData={profileData} />
      <Tabs onTabChange={handleTabChange} />
      <div className="profile__tab-content">
        {activeTab === "posts" && <Post post={profileData.post} />}
        {activeTab === "replies" && <div>Replies</div>}
        {activeTab === "media" && <div>Media</div>}
        {activeTab === "likes" && <div>Likes</div>}
      </div>
      <WhoToFollow suggestions={recommendedFollowers} />
    </div>
  );
};

export default ProfileOverview;
