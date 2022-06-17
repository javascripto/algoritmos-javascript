import { insertionSort } from './insertion-sort';
import { swapItemsPosition } from '../utils/swap-items-position';

jest.mock('../utils/swap-items-position', () => ({
  swapItemsPosition: jest.fn(
    jest.requireActual('../utils/swap-items-position').swapItemsPosition
  ),
}));

describe('insertionSort', () => {
  it.each`
    list                        | expectedSortedList
    ${[1, 2, 3]}                | ${[1, 2, 3]}
    ${[3, 2, 1]}                | ${[1, 2, 3]}
    ${[5, 2, 8, 3, 7, 6, 1, 0]} | ${[0, 1, 2, 3, 5, 6, 7, 8]}
  `('should sort some lists', ({ list, expectedSortedList }) => {
    const sortedList = insertionSort(list);
    expect(sortedList).toEqual(expectedSortedList);
  });

  it.each`
    list               | expectedSwaps
    ${[1, 2, 3]}       | ${0}
    ${[2, 1]}          | ${1}
    ${[3, 2, 1]}       | ${3}
    ${[8, 2, 5, 6, 3]} | ${6}
  `('should swap items $expectedSwaps times', ({ list, expectedSwaps }) => {
    insertionSort(list);
    expect(swapItemsPosition).toBeCalledTimes(expectedSwaps);
  });

  it('should not swap items on sort array', () => {
    insertionSort([1, 2, 3]);
    expect(swapItemsPosition).not.toHaveBeenCalled();
  });
});
