import { joinSortedLists } from './join-sorted-lists';
import { ComparatorFn } from './comparator';

describe('joinSortedLists', () => {
  it.each`
    list1              | list2           | expected
    ${[1, 2, 3]}       | ${[4, 5, 6]}    | ${[1, 2, 3, 4, 5, 6]}
    ${[1, 3]}          | ${[2, 4, 6, 8]} | ${[1, 2, 3, 4, 6, 8]}
    ${[1, 3, 5, 7, 9]} | ${[2, 4]}       | ${[1, 2, 3, 4, 5, 7, 9]}
  `(
    'should join two sorted lists into a new sorted list',
    ({ list1, list2, expected }) => {
      const result = joinSortedLists(list1, list2);
      expect(result).toEqual(expected);
    }
  );

  it('should join two sorted lists of objects with custom comparator function', () => {
    const list1 = [{ id: 1 }, { id: 3 }];
    const list2 = [{ id: 2 }, { id: 5 }, { id: 6 }, { id: 8 }];
    const expectedResult = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 5 },
      { id: 6 },
      { id: 8 },
    ];
    const comparatorFn: ComparatorFn<typeof list1[number]> = (a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    };
    const result1 = joinSortedLists(list1, list2, comparatorFn);
    const result2 = joinSortedLists(list2, list1, comparatorFn);
    expect(result1).toEqual(expectedResult);
    expect(result2).toEqual(expectedResult);
  });
});
