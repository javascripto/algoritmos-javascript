import { getLowerItemIndex } from '../../utils/get-lower-item-index';
import { swapItemsPosition } from '../../utils/swap-items-position';
import { simpleComparator, ComparatorFn } from '../../utils/comparator';

/**
 *
 * @description Selection sort:
 * The selection sort algorithm works by iterating over the array, finding
 * the smallest element and swapping it with the current element.
 */
export function selectionSort<T>(
  list: T[],
  comparatorFn: ComparatorFn<T> = simpleComparator
): T[] {
  for (let currentIndex = 0; currentIndex < list.length; currentIndex++) {
    const lowerItemIndex = getLowerItemIndex(list, currentIndex, comparatorFn);
    swapItemsPosition(list, currentIndex, lowerItemIndex);
  }
  return list;
}

/* istanbul ignore next */
async function main() {
  const { books } = await import('./books');
  const bookPrices = books.map((book) => book.price);
  console.log(selectionSort(bookPrices));
  console.log(
    selectionSort(bookPrices, (x, y) => {
      if (x > y) return -1;
      if (x < y) return 1;
      return 0;
    })
  );
}

/* istanbul ignore next */
if (require.main === module) main();
