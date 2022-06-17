import { getLowerItemIndex } from '../utils/get-lower-item-index';
import { swapItemsPosition } from '../utils/swap-items-position';

/**
 *
 * @description Selection sort:
 * The selection sort algorithm works by iterating over the array, finding
 * the smallest element and swapping it with the current element.
 */
export function selectionSort<T>(list: T[]): T[] {
  for (let currentIndex = 0; currentIndex < list.length; currentIndex++) {
    const lowerItemIndex = getLowerItemIndex(list, currentIndex);
    swapItemsPosition(list, currentIndex, lowerItemIndex);
  }
  return list;
}
/* istanbul ignore next */
async function main() {
  const { books } = await import('../data-sources/book-list');
  const bookPrices = books.map((book) => book.price);
  console.log(selectionSort(bookPrices));
}
/* istanbul ignore next */
if (require.main === module) main();
