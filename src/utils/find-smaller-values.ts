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

export function divideOnPivot<T>(
  list: T[],
  comparatorFn: ComparatorFn<T> = simpleComparator
): T[] {
  let pivot = list[Math.floor(list.length / 2)];
  console.log(pivot);
  findSmallerValues(pivot, list);
  let smallerValues = 0;
  for (let current = 0; current < list.length; current++) {
    const currentItem = list[current];
    if (currentItem !== pivot && comparatorFn(currentItem, pivot) < 1) {
      list.$swap(current, smallerValues);
      smallerValues++;
    }
  }
  return list;
}

/* istanbul ignore next */
if (require.main === module) {
  const list = [3, 6, 2, 5, 8, 7];
  console.log(list);
  console.log(divideOnPivot(list));
}
