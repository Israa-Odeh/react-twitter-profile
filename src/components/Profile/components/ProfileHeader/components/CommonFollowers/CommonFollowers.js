import "./commonFollowers.css";

const CommonFollowers = ({ commonFollowers }) => {
  const firstTwoFollowers = commonFollowers.slice(0, 2);

  return (
    <div className="followers">
      <div className="followers__images">
        {firstTwoFollowers.map((follower, index) => (
          <img
            key={index}
            className="followers__images-image"
            src={follower.profilePicture}
            width={16}
            height={16}
            alt={`Profile avatar of ${follower.name}`}
          />
        ))}
      </div>
      <p className="followers__description">
        Followed by{" "}
        {firstTwoFollowers.map((follower) => follower.name).join(", ")}{" "}
        {commonFollowers.length > 2 &&
          `and ${commonFollowers.length - 2} others you follow`}
      </p>
    </div>
  );
};

export default CommonFollowers;
