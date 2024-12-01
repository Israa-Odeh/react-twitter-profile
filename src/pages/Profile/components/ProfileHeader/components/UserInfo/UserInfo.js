import "./userInfo.css";

const UserInfo = ({ name, username }) => {
  return (
    <div className="user-info">
      <h2 className="section-header user-info__name">{name}</h2>
      <span className="user-info__username">@{username}</span>
    </div>
  );
};

export default UserInfo;
