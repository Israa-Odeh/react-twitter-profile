import { RxCalendar } from "react-icons/rx";
import { GrAttachment } from "react-icons/gr";
import "./metadata.css";

const Metadata = ({ externalUrl, linkLabel, joinDate }) => {
  return (
    <div className="metadata">
      <div className="metadata__item">
        <GrAttachment size={16} />
        <a href={externalUrl} className="metadata__item-link" target="_blank">
          {linkLabel}
        </a>
      </div>

      <div className="metadata__item">
        <RxCalendar size={16} />
        <span>Joined {joinDate}</span>
      </div>
    </div>
  );
};

export default Metadata;
