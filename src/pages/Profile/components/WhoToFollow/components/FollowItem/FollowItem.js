import "./followItem.css";

const FollowItem = ({ children, description }) => {
  return (
    <div className="follow-item">
      {children}
      <p className="follow-item__description">{description}</p>
    </div>
  );
};

export default FollowItem;
