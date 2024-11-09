import React from "react";
import { Explore, Profile, Sidebar } from "./components";
import {
  user,
  suggestedFollowers,
  recommendedFollowers,
  trends,
  visitedProfileData,
} from "./data/data";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar user={user} />
      <Profile
        recommendedFollowers={recommendedFollowers}
        profileData={visitedProfileData}
      />
      <Explore suggestions={suggestedFollowers} trends={trends} />
    </div>
  );
};

export default App;
