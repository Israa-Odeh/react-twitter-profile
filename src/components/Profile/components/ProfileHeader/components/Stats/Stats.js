import formatCount from "components/utils/formatCount";
import "./stats.css";

const Stats = ({ followingCount, followersCount }) => {
  return (
    <div className="stats">
      <p className="stats__stat">
        {formatCount(followingCount)}
        <span className="stats__stat-label"> Following</span>
      </p>
      <p className="stats__stat">
        {formatCount(followersCount)}
        <span className="stats__stat-label"> Followers</span>
      </p>
    </div>
  );
};

export default Stats;
