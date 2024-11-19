import { SuggestionList } from "./components";

const YouMightLike = ({ suggestions }) => {
  return (
    <div className="you-might-like">
      <h2 className="section-header">You Might Like</h2>
      <SuggestionList suggestions={suggestions} />
      <button className="show-more-button" type="button">
        Show more
      </button>
    </div>
  );
};

export default YouMightLike;
