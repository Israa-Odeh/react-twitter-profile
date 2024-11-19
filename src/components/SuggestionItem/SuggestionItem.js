import { PiSealCheckFill } from "react-icons/pi";
import { IoPersonSharp } from "react-icons/io5";
import "./suggestionItem.css";

const SuggestionItem = ({
  imageUrl,
  displayName,
  username,
  isVerified = false,
  followedBy = "",
}) => {
  return (
    <div className="suggestion-item">
      <div className="suggestion-item__content">
        <img
          className="suggestion-item__image"
          src={imageUrl}
          width={32}
          height={32}
          alt={`${displayName}'s profile avatar`}
        />

        <div className="suggestion-item__info">
          {followedBy && (
            <div className="suggestion-item__followed-by">
              <IoPersonSharp className="suggestion-item__followed-by-icon" />
              {followedBy}
            </div>
          )}
          <div className="suggestion-item__display-name">
            <a
              href={`/profile/${username}`}
              className="suggestion-item__display-name-link"
            >
              {displayName}
            </a>
            {isVerified && (
              <PiSealCheckFill
                className="suggestion-item__verified-icon"
                size={16}
              />
            )}
          </div>

          <span className="suggestion-item__username">@{username}</span>
        </div>
      </div>

      <button className="suggestion-item__button" type="button">
        Follow
      </button>
    </div>
  );
};

export default SuggestionItem;
