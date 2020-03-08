export function makeRandom(maxLength, data) {

  const randomIds = [];

  const ids = data.map((item) => item.id);

  if (maxLength >= ids.length) {
    maxLength = ids.length;
  }

  return function generateRandomIds() {
    while (randomIds.length !== maxLength) {
      const randomIndex = Math.floor((Math.random() * ids.length));
      randomIds.push(ids[randomIndex]);
      ids.splice(randomIndex, 1);
    }

    return randomIds;
  };
}
