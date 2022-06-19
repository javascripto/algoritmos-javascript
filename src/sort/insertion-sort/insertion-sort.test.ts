import { insertionSort } from './insertion-sort';
import '../../utils/swap-items-position';

describe('insertionSort', () => {
  const $swap = (Array.prototype.$swap = jest.fn(Array.prototype.$swap));

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
    expect($swap).toBeCalledTimes(expectedSwaps);
  });

  it('should not swap items on sort array', () => {
    insertionSort([1, 2, 3]);
    expect($swap).not.toHaveBeenCalled();
  });
});
