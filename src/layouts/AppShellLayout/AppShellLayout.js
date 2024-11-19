import Sidebar from "layouts/Sidebar";
import Explore from "layouts/Explore";
import { user, suggestedFollowers, trends } from "data/data";
import "./appShellLayout.css";

const AppShellLayout = ({ children }) => {
  return (
    <div className="app">
      <Sidebar user={user} />
      {children}
      <Explore suggestions={suggestedFollowers} trends={trends} />
    </div>
  );
};

export default AppShellLayout;
