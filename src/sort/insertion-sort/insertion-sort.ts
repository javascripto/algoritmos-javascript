import '../../utils/swap-items-position';
import {
  ComparatorFn,
  simpleComparator,
  createComparatorFn,
} from '../../utils/comparator';

/**
 *
 * @description Insertion sort:
 * The insertion sort algorithm works by iterating over the array, finding
 * the correct position for the current element and then swapping it with
 * the element at that position (INSERTING the element on the correct
 * position).
 */
export function insertionSort<T>(
  list: T[],
  comparatorFn: ComparatorFn = simpleComparator
): T[] {
  for (let currentIndex = 0; currentIndex < list.length - 1; currentIndex++) {
    let left = currentIndex;
    let right = currentIndex + 1;
    while (comparatorFn(list[right], list[left]) < 0) {
      list.$swap(left, right);
      left--;
      right--;
    }
  }
  return list;
}

/* istanbul ignore next */
async function main() {
  const { books } = await import('./books');
  console.log(
    insertionSort(
      books,
      createComparatorFn((book) => book?.price)
    )
  );

  console.log(
    insertionSort(
      books,
      createComparatorFn((book) => book?.title)
    )
  );
}
/* istanbul ignore next */
if (require.main === module) main();
