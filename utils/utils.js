export function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
