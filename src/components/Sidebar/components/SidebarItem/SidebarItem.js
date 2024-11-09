import "./sidebarItem.css";

const SidebarItem = ({ href, icon: Icon, children }) => {
  return (
    <a href={href} className="sidebar__item">
      <Icon size={24} className="sidebar__item-icon" />
      <span className="sidebar__item-label">{children}</span>
    </a>
  );
};

export default SidebarItem;
