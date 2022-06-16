import { lowerNumber } from '../utils/lower-number';
import { swapItemsPosition } from '../utils/swap-items-position';

// Selection sort:
//   The selection sort algorithm works by iterating over the array, finding
//   the smallest element and swapping it with the current element.
export function selectionSort<T>(list: T[]): T[] {
  for (let currentIndex = 0; currentIndex < list.length; currentIndex++) {
    const cheaperBookIndex = lowerNumber(list, currentIndex);
    swapItemsPosition(list, currentIndex, cheaperBookIndex);
  }
  return list;
}

if (require.main === module) {
  (async () => {
    const { books } = await import('../data-sources/book-list');
    const bookPrices = books.map((book) => book.price);
    console.log(selectionSort(bookPrices));
  })();
}
