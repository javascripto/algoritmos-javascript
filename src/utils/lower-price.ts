interface Product {
  price: number;
}

export function lowerPrice(products: Product[], initialPosition = 0): number {
  let cheaper = initialPosition;
  for (let current = initialPosition; current < products.length; current++) {
    if (products[current].price < products[cheaper].price) {
      cheaper = current;
    }
  }
  return cheaper;
}
