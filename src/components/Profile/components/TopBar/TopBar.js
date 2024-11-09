import { BiArrowBack } from "react-icons/bi";
import formatCount from "components/utils/formatCount";
import "./topBar.css";

const TopBar = ({ title, postsCount }) => {
  return (
    <div className="top-bar">
      <button className="top-bar__back-button">
        <BiArrowBack size={24} />
      </button>
      <div className="top-bar__content">
        <h1 className="top-bar__title">{title}</h1>
        <span className="top-bar__posts-count">
          {formatCount(postsCount)} posts
        </span>
      </div>
    </div>
  );
};

export default TopBar;
