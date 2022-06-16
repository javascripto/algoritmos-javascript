export function swapItemsPosition<T>(
  array: T[],
  indexA: number,
  indexB: number
): void {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}
