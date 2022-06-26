import {
  ComparatorFn,
  simpleComparator,
  createComparatorFn,
} from '../../utils/comparator';
import { joinSortedLists } from '../../utils/join-sorted-lists';

/**
 *
 * @description: merge sort is a sort algorithm that divides the input list
 * into two halves recursively until the list is of size 1. Then, it returns
 * the two halves joined together with a helper function that merges two
 * sorted lists.
 * The merge sort algorithm is a divide and conquer algorithm.
 */
export function mergeSort<T>(
  list: T[],
  comparatorFn: ComparatorFn<T> = simpleComparator
): T[] {
  if (list.length < 2) return list;
  const middle = Math.floor(list.length / 2);
  const left = mergeSort(list.slice(0, middle), comparatorFn);
  const right = mergeSort(list.slice(middle), comparatorFn);
  return joinSortedLists(left, right, comparatorFn);
}

/* istanbul ignore next */
declare global {
  interface Array<T> {
    Sort(comparator?: ComparatorFn<T>): T[];
  }
}
/* istanbul ignore next */
if (require.main === module) {
  const list = [8, 3, 5, 2, 0, 9];
  console.log(list, '<- list');
  console.log(mergeSort(list), '<- sorted list');

  class Age {
    constructor(public age: number) {}
  }

  const ages = [
    new Age(21),
    new Age(19),
    new Age(20),
    new Age(15),
    new Age(35),
    new Age(18),
  ];
  console.log(ages, '<- ages');
  console.log(
    mergeSort(
      ages,
      createComparatorFn((a) => a.age)
    ),
    '<- sorted ages'
  );

  Array.prototype.Sort = function (comparator = simpleComparator) {
    return mergeSort(this, comparator);
  };

  console.log(
    [4, 7, 2, 8, 9, 0].Sort((a, b) => {
      return a < b ? -1 : a > b ? 1 : 0;
    })
  );
}
