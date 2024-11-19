import { BsTwitterX } from "react-icons/bs";
import { BiHomeCircle, BiSearch, BiEnvelope, BiBookmark } from "react-icons/bi";
import { PiBell } from "react-icons/pi";
import { RiFileListLine } from "react-icons/ri";
import { BsPeople, BsPerson } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { BsPlusCircle } from "react-icons/bs";
import { SidebarItem, ProfileSummary } from "./components";
import "./sidebar.css";

const Sidebar = ({ user }) => {
  const { displayName, username, avatarUrl } = user;
  return (
    <div className="sidebar">
      <BsTwitterX className="sidebar__logo" size={24} />

      <SidebarItem href="/" icon={BiHomeCircle}>
        Home
      </SidebarItem>

      <SidebarItem href="/explore" icon={BiSearch}>
        Explore
      </SidebarItem>

      <SidebarItem href="/notifications" icon={PiBell}>
        Notifications
      </SidebarItem>

      <SidebarItem href="/messages" icon={BiEnvelope}>
        Messages
      </SidebarItem>

      <SidebarItem href="/lists" icon={RiFileListLine}>
        Lists
      </SidebarItem>

      <SidebarItem href="/bookmarks" icon={BiBookmark}>
        Bookmarks
      </SidebarItem>

      <SidebarItem href="/communities" icon={BsPeople}>
        Communities
      </SidebarItem>

      <SidebarItem href="/profile" icon={BsPerson}>
        Profile
      </SidebarItem>

      <SidebarItem href="/more" icon={CgMoreO}>
        More
      </SidebarItem>

      <button className="sidebar__button" type="button">
        Post
      </button>

      <button className="sidebar__icon-button" type="button">
        <BsPlusCircle size={24} />
      </button>

      <ProfileSummary
        imageUrl={avatarUrl}
        displayName={displayName}
        username={username}
      />
    </div>
  );
};

export default Sidebar;
