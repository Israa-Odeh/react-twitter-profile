import { RiMoreFill } from "react-icons/ri";
import formatCount from "utils/formatCount";
import "./trendItem.css";

const TrendItem = ({ trend }) => {
  const isArabic = (str) => {
    return /[\u0600-\u06FF]/.test(str);
  };

  const isTrendArabic = isArabic(trend.topic);

  const directionClass = isTrendArabic ? "rtl" : "ltr";

  return (
    <div className="trend">
      <div className="trend__info">
        {trend.category && (
          <span
            className={`trend__category trend__category--${directionClass}`}
          >
            {trend.category}
          </span>
        )}
        <span className={`trend__topic trend__topic--${directionClass}`}>
          {trend.topic}
        </span>
        {trend.tweetCount !== undefined && (
          <span className="trend__tweet-count">
            {formatCount(trend.tweetCount)} posts
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
