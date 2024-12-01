import { CgMoreAlt } from "react-icons/cg";
import { LuBellPlus } from "react-icons/lu";
import "./actionButtons.css";

const ActionButtons = ({ isFollowing }) => {
  return (
    <div className="action-buttons">
      <button
        className="action-buttons__button action-buttons__more"
        type="button"
      >
        <CgMoreAlt size={24} />
      </button>
      <button
        className="action-buttons__button action-buttons__notifications"
        type="button"
      >
        <LuBellPlus size={24} />
      </button>
      <button
        className="action-buttons__button action-buttons__follow"
        type="button"
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default ActionButtons;
