import { RiMoreFill } from "react-icons/ri";
import formatCount from "utils/formatCount";
import isArabicText from "utils/isArabicText";
import "./trendItem.css";

const TrendItem = ({ trend }) => {
  const { category, topic, tweetCount } = trend;

  const isTrendArabic = isArabicText(topic);

  const directionClass = isTrendArabic ? "rtl" : "ltr";

  return (
    <div className="trend">
      <div className="trend__info">
        {category && (
          <span
            className={`trend__category trend__category--${directionClass}`}
          >
            {category}
          </span>
        )}
        <span className={`trend__topic trend__topic--${directionClass}`}>
          {topic}
        </span>
        {tweetCount !== undefined && (
          <span className="trend__tweet-count">
            {formatCount(tweetCount)} posts
          </span>
        )}
      </div>

      {!isTrendArabic && (
        <button className="trend__options-button" type="button">
          <RiMoreFill size={24} />
        </button>
      )}
    </div>
  );
};

export default TrendItem;
