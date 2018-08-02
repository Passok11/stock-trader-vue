export default function (minRange, maxRange, companyName) {
  const result = Math.floor(Math.random() * ((maxRange - minRange) + 1)) + minRange;
  console.log('result: ' + result + ' Company: ' + companyName);
  return result;
}
