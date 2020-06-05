export const TRUTHY = [true, 1, {}];
export const FALSY = [false, 0, undefined, null];
export const NUMERIC = [-1, 0, 0.5, 1, 1000000, 1000000000];

export function getEveryCombination([head, ...tail]: any[]): any[] {
  if (!tail.length) return head.map((h: any) => [h]);
  const combinations = getEveryCombination(tail);
  return combinations.map((combination) => head.map((h: any) => [h, ...combination])).flat();
}

export default function useMultiPossibility(test: Function, possibilities: any[]): void {
  getEveryCombination(possibilities)
    .forEach((value) => test(value));
}
