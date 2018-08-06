export default function (minRange, maxRange) {
  const result = Math.floor(Math.random() * ((maxRange - minRange) + 1)) + minRange;
  return result;
}
