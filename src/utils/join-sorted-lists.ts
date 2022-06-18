/**
 *
 * @description Join two sorted lists into a new sorted list.
 * It will not work if the lists passed as argument are not sorted.
 */
export function joinSortedLists<T>(
  firstSortedList: T[],
  secondSortedList: T[]
): T[] {
  const newList = Array(firstSortedList.length + secondSortedList.length);
  for (let i = 0, a = 0, b = 0; i < newList.length; i++) {
    const itemA = firstSortedList[a];
    const itemB = secondSortedList[b];
    const reachedEndOfListB = itemB === undefined;
    if (itemA <= itemB || reachedEndOfListB) {
      newList[i] = itemA;
      a++;
    } else {
      newList[i] = itemB;
      b++;
    }
  }
  return newList;
}
