export const TRUTHY = [true, 1];
export const FALSY = [false, 0, undefined, null];
export const NUMERIC = [0, 0.5, 1, 1000000, 1000000000];

export function getEveryCombination([head, ...tail]) {
  if (!tail.length) return head.map(h => [h]);
  const combinations = getEveryCombination(tail);
  return combinations.map((combination) => head.map((h) => [h, ...combination])).flat();
}

export default function useMultiPossibility(test, possibilities) {
  getEveryCombination(possibilities)
    .forEach(test);
}
