import './swap-items-position';
import { ComparatorFn, simpleComparator } from './comparator';

export function findSmallerValues<T>(
  pivot: T,
  list: T[],
  comparatorFn: ComparatorFn<T> = simpleComparator
): T[] {
  let smallerValues = 0;
  for (let current = 0; current < list.length; current++) {
    const currentItem = list[current];
    if (comparatorFn(currentItem, pivot) < 0) {
      smallerValues++;
    }
  }
  const indexOfPivot = list.indexOf(pivot);
  list.$swap(indexOfPivot, smallerValues);
  return list;
}
