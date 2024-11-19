import React from "react";
import AppShellLayout from "layouts/AppShellLayout";
import Profile from "./pages/Profile";
import "./App.css";

const App = () => {
  return (
    <AppShellLayout>
      <Profile />
    </AppShellLayout>
  );
};

export default App;
