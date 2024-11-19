import { FollowList } from "./components";
import "./whoToFollow.css";

const WhoToFollow = ({ suggestions }) => {
  return (
    <div className="who-to-follow">
      <h2 className="section-header">Who To Follow</h2>
      <FollowList suggestions={suggestions} />
      <button className="show-more-button" type="button">
        Show more
      </button>
    </div>
  );
};

export default WhoToFollow;
