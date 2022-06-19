export interface ComparatorFn<T = any> {
  (itemA: T, itemB: T): -1 | 0 | 1;
}

export const simpleComparator: ComparatorFn = <T>(a: T, b: T) => {
  return a === b ? 0 : a < b ? -1 : 1;
};

export function createComparatorFn<T>(
  keyExtractorFn: (t: T) => any
): ComparatorFn<T> {
  const multipleResult = <T>(item: T): T[] =>
    Array.isArray(item) ? item : [item];

  return (a: T, b: T) => {
    let resultA = multipleResult(keyExtractorFn(a));
    let resultB = multipleResult(keyExtractorFn(b));
    let index = 0;
    while (resultA[index] !== undefined && resultA[index] === resultB[index]) {
      index++;
    }
    if (resultA[index] < resultB[index]) {
      return -1;
    }
    if (resultA[index] > resultB[index]) {
      return 1;
    }
    return 0;
  };
}

/* istanbul ignore next */
function main() {
  class Person {
    static comparator = createComparatorFn<Person>((person) => {
      // first sort by names, then by age
      return [person.name, person.age];
    });
    constructor(public name: string, public age: number = 0) {}
  }

  console.log(
    [
      new Person('beltrano', 21), // second
      new Person('fulano', 19), // fourth
      new Person('beltrano', 20), // first
      new Person('fulano', 15), // third
    ].sort(Person.comparator)
  );

  function binaryCardinality(number: number): number {
    return number.toString(2).match(/1/g)?.length ?? 0;
  }

  const numbers = [8, 3, 5, 2, 0, 9];
  console.log(numbers, '<- numbers');
  console.log(numbers.map(binaryCardinality), '<- binary cardinality');
  console.log('-'.repeat(20));

  numbers.sort(createComparatorFn((n) => binaryCardinality(n)));
  console.log(numbers, '<- sorted by binary cardinality');
  console.log(numbers.map(binaryCardinality), '<- binary cardinality');
  console.log('-'.repeat(20));

  numbers.sort(createComparatorFn((n) => [binaryCardinality(n), n]));
  console.log(numbers, '<- sorted by binary cardinality and decimal number');
  console.log(numbers.map(binaryCardinality), '<- binary cardinality');
}

/* istanbul ignore next */
if (require.main === module) {
  main();
}
