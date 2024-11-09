import FollowItem from "../FollowItem";
import SuggestionItem from "components/common/SuggestionItem";
import "./followList.css";

const FollowList = ({ suggestions }) => {
  return (
    <>
      {suggestions.map((suggestion, index) => (
        <FollowItem key={index} description={suggestion.description}>
          <SuggestionItem
            imageUrl={suggestion.imageUrl}
            displayName={suggestion.displayName}
            username={suggestion.username}
            isVerified={suggestion.isVerified}
            followedBy={suggestion.followedBy}
          />
        </FollowItem>
      ))}
    </>
  );
};

export default FollowList;
