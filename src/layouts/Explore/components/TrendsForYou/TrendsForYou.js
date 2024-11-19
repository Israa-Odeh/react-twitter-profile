import { TrendItem } from "./components";

const TrendsForYou = ({ trends }) => {
  return (
    <div className="trends-for-you">
      <h2 className="section-header">Trends For You</h2>
      {trends.map((trend, index) => (
        <TrendItem key={index} trend={trend} />
      ))}
      <button className="show-more-button" type="button">
        Show more
      </button>
    </div>
  );
};

export default TrendsForYou;
