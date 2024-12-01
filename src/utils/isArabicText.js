const isArabicText = (str) => {
  return /[\u0600-\u06FF]/.test(str);
};

export default isArabicText;
