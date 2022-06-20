import { ComparatorFn, simpleComparator } from './comparator';

/**
 *
 * @description Join two sorted lists into a new sorted list.
 * It will not work if the lists passed as argument are not sorted.
 */

export function joinSortedLists<T>(
  listA: T[],
  listB: T[],
  comparatorFn: ComparatorFn<T> = simpleComparator
): T[] {
  const newList = Array(listA.length + listB.length);
  let a = 0;
  let b = 0;
  let current = 0;
  while (a < listA.length && b < listB.length) {
    if (comparatorFn(listA[a], listB[b]) < 0) {
      newList[current] = listA[a];
      a++;
    } else {
      newList[current] = listB[b];
      b++;
    }
    current++;
  }
  while (a < listA.length) {
    newList[current] = listA[a];
    a++;
    current++;
  }
  while (b < listB.length) {
    newList[current] = listB[b];
    b++;
    current++;
  }
  return newList;
}
