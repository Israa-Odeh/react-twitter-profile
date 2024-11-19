import {
  FooterLinks,
  SearchBar,
  TrendsForYou,
  YouMightLike,
} from "./components";
import "./explore.css";

const Explore = ({ suggestions, trends }) => {
  return (
    <div className="explore">
      <SearchBar />
      <YouMightLike suggestions={suggestions} />
      <TrendsForYou trends={trends} />
      <FooterLinks />
    </div>
  );
};

export default Explore;
