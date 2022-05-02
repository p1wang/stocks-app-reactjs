export function getTextClassName(percentage) {
  if (percentage < 0) {
    return "negative";
  } else if (percentage === 0) {
    return "even";
  } else {
    return "positive";
  }
}
