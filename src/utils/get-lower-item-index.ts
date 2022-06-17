export function getLowerItemIndex<T>(list: T[], initialPosition = 0): number {
  let lowerItemIndex = initialPosition;
  for (
    let currentIndex = initialPosition;
    currentIndex < list.length;
    currentIndex++
  ) {
    if (list[currentIndex] < list[lowerItemIndex]) {
      lowerItemIndex = currentIndex;
    }
  }
  return lowerItemIndex;
}
