import { RiMoreFill } from "react-icons/ri";
import "./profileSummary.css";

const ProfileSummary = ({ imageUrl, displayName, username }) => {
  return (
    <div className="profile-summary">
      <img
        className="profile-summary__image"
        src={imageUrl}
        width={32}
        height={32}
        alt={`${displayName} profile avatar`}
      />
      <div className="profile-summary__info">
        <div className="profile-summary__display-name" title={displayName}>
          {displayName}
        </div>
        <div className="profile-summary__username" title={`@${username}`}>
          @{username}
        </div>
      </div>
      <button className="profile-summary__more-button" type="button">
        <RiMoreFill size={24} />
      </button>
    </div>
  );
};

export default ProfileSummary;
