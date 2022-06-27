import '../../utils/swap-items-position';
import { ComparatorFn, simpleComparator } from '../../utils/comparator';

export function quickSort<T>(
  list: T[],
  leftIndex: number,
  rightIndex: number,
  comparatorFn: ComparatorFn<T> = simpleComparator
): T[] {
  if (list.length <= 1) return list;
  let currentIndex = partition(list, leftIndex, rightIndex, comparatorFn);
  if (leftIndex < currentIndex - 1) {
    quickSort(list, leftIndex, currentIndex - 1, comparatorFn);
  }
  if (currentIndex < rightIndex) {
    quickSort(list, currentIndex, rightIndex, comparatorFn);
  }
  return list;
}

function partition<T>(
  list: T[],
  leftIndex: number,
  rightIndex: number,
  comparatorFn: ComparatorFn<T> = simpleComparator
): number {
  let pivot = list[Math.floor((leftIndex + rightIndex) / 2)];
  let currentLeftIndex = leftIndex;
  let currentRightIndex = rightIndex;
  while (currentLeftIndex <= currentRightIndex) {
    while (comparatorFn(list[currentLeftIndex], pivot) < 0) {
      currentLeftIndex++;
    }
    while (comparatorFn(list[currentRightIndex], pivot) > 0) {
      currentRightIndex--;
    }
    if (currentLeftIndex <= currentRightIndex) {
      list.$swap(currentLeftIndex, currentRightIndex);
      currentLeftIndex++;
      currentRightIndex--;
    }
  }
  return currentLeftIndex;
}

/* istanbul ignore next */
if (require.main === module) {
  const list = [3, 6, 2, 5, 8, 7];
  console.log(list);
  quickSort(list, 0, list.length - 1);
  console.log(list);
  const people = [
    { name: 'Joe', age: 40 },
    { name: 'Jane', age: 30 },
    { name: 'Jack', age: 50 },
    { name: 'John', age: 20 },
  ];
  quickSort(people, 0, people.length - 1, (a, b) => {
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
  });
  console.log(people);
}
