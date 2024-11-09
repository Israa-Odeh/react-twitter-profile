import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { BiBarChart } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { CgMoreAlt } from "react-icons/cg";
import formatCount from "components/utils/formatCount";
import "./post.css";

const ActionItem = ({ Icon, count }) => (
  <button className="post__action-button" type="button">
    <Icon size={24} />
    {count && <span className="post__action-count">{formatCount(count)}</span>}
  </button>
);

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.isReposted && (
        <div class="post__reposted">
          <BiRepost size={16} />
          <span>{post.repostedBy} reposted</span>
        </div>
      )}

      <div className="post__header">
        <img
          className="post__user-image"
          src={post.authorImageUrl}
          width={48}
          height={48}
          alt={`${post.userDisplayName}'s profile avatar`}
        />
        <div className="post__content-wrapper">
          <div className="post__header-info">
            <div className="post__user-info">
              <span className="post__user-display-name">
                {post.userDisplayName}
              </span>
              <span className="post__username">@{post.username + " ."}</span>
              <span className="post__publish-date">{post.publishDate}</span>
            </div>
            <button className="post__more-button" type="button">
              <CgMoreAlt size={24} />
            </button>
          </div>
          <p className="post__content">{post.content}</p>
          <div className="post__actions">
            <ActionItem Icon={FaRegComment} count={post.comments} />
            <ActionItem Icon={BiRepost} count={post.reposts} />
            <ActionItem Icon={CiHeart} count={post.likes} />
            <ActionItem Icon={BiBarChart} count={post.reach} />
            <ActionItem Icon={FiUpload} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
