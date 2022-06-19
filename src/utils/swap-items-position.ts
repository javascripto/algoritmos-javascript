export function swapItemsPosition<T>(
  array: T[],
  indexA: number,
  indexB: number
): T[] {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
  return array;
}

declare global {
  interface Array<T> {
    $swap(index1: number, index2: number): T[];
  }
}

Array.prototype.$swap = function <T>(index1: number, index2: number): T[] {
  return swapItemsPosition(this, index1, index2);
};
