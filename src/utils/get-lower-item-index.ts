import { ComparatorFn, simpleComparator } from './comparator';

export function getLowerItemIndex<T>(
  list: T[],
  initialPosition = 0,
  comparatorFn: ComparatorFn<T> = simpleComparator
): number {
  let lowerItemIndex = initialPosition;
  for (
    let currentIndex = initialPosition;
    currentIndex < list.length;
    currentIndex++
  ) {
    if (comparatorFn(list[currentIndex], list[lowerItemIndex]) < 0) {
      lowerItemIndex = currentIndex;
    }
  }
  return lowerItemIndex;
}
