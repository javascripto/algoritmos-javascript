import books from '../data-sources/book-list';
import { lowerPrice } from '../utils/lower-price';
import { swapItemsPosition } from '../utils/swap-items-position';

// Selection sort:
//   The selection sort algorithm works by iterating over the array, finding
//   the smallest element and swapping it with the current element.

const booksCopy = [...books];

for (let currentIndex = 0; currentIndex < booksCopy.length; currentIndex++) {
  const cheaperBookIndex = lowerPrice(booksCopy, currentIndex);
  swapItemsPosition(booksCopy, currentIndex, cheaperBookIndex);
}

console.log(booksCopy);
