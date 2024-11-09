const formatCount = (count) => {
  if (count < 1000) return count.toString();
  if (count < 1000000) return (count / 1000).toFixed(1) + "k";
  return (count / 1000000).toFixed(1) + "M";
};

export default formatCount;
