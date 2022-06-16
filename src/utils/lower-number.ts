export function lowerNumber<T>(products: T[], initialPosition = 0): number {
  let cheaper = initialPosition;
  for (let current = initialPosition; current < products.length; current++) {
    if (products[current] < products[cheaper]) {
      cheaper = current;
    }
  }
  return cheaper;
}
