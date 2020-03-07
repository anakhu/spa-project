export function makeRandom(maxLength) {
  const randomIds = [];

  return function generateRandomIds(data, id = null) {
    if (randomIds.length === maxLength) {
      return randomIds;
    }

    const randomId = Math.floor((Math.random() * data.length) + 1);

    if (id && randomIds.indexOf(randomId) === -1 && randomId !== id) {
      randomIds.push(randomId);
    }

    if (!id && randomIds.indexOf(randomId) === -1) {
      randomIds.push(randomId);
    }

    return generateRandomIds(data, id);
  };
}
