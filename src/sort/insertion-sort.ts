import { swapItemsPosition } from '../utils/swap-items-position';

// Insertion sort:
//   The insertion sort algorithm works by iterating over the array, finding
//   the correct position for the current element and then swapping it with
//   the element at that position (INSERTING the element on the correct
//   position).
export function insertionSort<T>(list: T[]): T[] {
  for (let currentIndex = 1; currentIndex < list.length; currentIndex++) {
    let analyzedItemIndex = currentIndex;
    let previousItemIndex = analyzedItemIndex - 1;
    if (analyzedItemIndex === 0) continue;
    while (list[analyzedItemIndex] < list[previousItemIndex]) {
      swapItemsPosition(list, analyzedItemIndex, previousItemIndex);
      analyzedItemIndex--;
      previousItemIndex--;
    }
  }
  return list;
}

async function main() {
  const { books } = await import('../data-sources/book-list');
  console.log(insertionSort(books.map((book) => book.price)));
  console.log(insertionSort(books.map((book) => book.title)));
}

if (require.main === module) main();
