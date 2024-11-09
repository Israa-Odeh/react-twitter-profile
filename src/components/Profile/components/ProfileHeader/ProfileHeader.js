import {
  ActionButtons,
  CommonFollowers,
  Metadata,
  Stats,
  UserInfo,
} from "./components";
import "./profileHeader.css";

const ProfileHeader = ({ profileData }) => {
  return (
    <div className="profile-header">
      <div
        className="profile-header__cover"
        style={{ backgroundImage: `url(${profileData.coverImage})` }}
      />

      <div className="profile-header__avatar-actions-wrapper">
        <img
          className="profile-header__avatar"
          src={profileData.profilePicture}
          width={128}
          height={128}
          alt={`Profile avatar of ${profileData.name}`}
        />
        <ActionButtons isFollowing={profileData.isFollowing} />
      </div>

      <div className="profile-header__details">
        <UserInfo name={profileData.name} username={profileData.username} />
        <p className="profile-header__bio">{profileData.bio}</p>
        <Metadata
          externalUrl={profileData.externalUrl}
          linkLabel={profileData.linkLabel}
          joinDate={profileData.joinDate}
        />
        <Stats
          followingCount={profileData.followingCount}
          followersCount={profileData.followersCount}
        />
        <CommonFollowers commonFollowers={profileData.commonFollowers} />
      </div>
    </div>
  );
};

export default ProfileHeader;
