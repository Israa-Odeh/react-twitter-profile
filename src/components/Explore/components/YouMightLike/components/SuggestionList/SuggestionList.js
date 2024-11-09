import SuggestionItem from "components/common/SuggestionItem";

const SuggestionList = ({ suggestions }) => {
  return (
    <>
      {suggestions.map((suggestion, index) => (
        <SuggestionItem
          key={index}
          imageUrl={suggestion.imageUrl}
          displayName={suggestion.displayName}
          username={suggestion.username}
          isVerified={suggestion.isVerified}
        />
      ))}
    </>
  );
};

export default SuggestionList;
