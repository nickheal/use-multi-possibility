import useMultiPossibility, {
  getEveryCombination,
  TRUTHY,
  FALSY,
} from '../../src/index';

describe('getEveryCombination', () => {
  it('should return every possible combination of a given set of arrays', () => {
    const sample = [['a'], ['B', 'C'], [1, 2, 3]];
    const result = getEveryCombination(sample);
    expect(result.sort()).toEqual([
      ['a', 'B', 1],
      ['a', 'B', 2],
      ['a', 'B', 3],
      ['a', 'C', 1],
      ['a', 'C', 2],
      ['a', 'C', 3],
    ].sort());
  });
});

describe('useMultiPossibility', () => {
  it('should run a function with every combination of the provided possibilities', () => {
    const fn = jest.fn();
    useMultiPossibility(([A, B]) => {
      fn(A, B);
    }, [['a'], [1, 2]]);
    expect(fn).toHaveBeenCalledWith('a', 1);
    expect(fn).toHaveBeenCalledWith('a', 2);
  });
});

describe('TRUTHY', () => {
  it('should only contain truthy values', () => {
    TRUTHY.map((t) => expect(!!t).toBe(true));
  });
});

describe('FALSY', () => {
  it('should only contain falsy values', () => {
    FALSY.map((f) => expect(!!f).toBe(false));
  });
});
