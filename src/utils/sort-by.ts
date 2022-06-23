interface ComparatorFn<T> {
  (a: T, b: T): -1 | 0 | 1;
}

interface SortByFn<T> {
  (item: T): [any, Sort | 'asc' | 'desc'][];
}

enum Sort {
  ASC = 'asc',
  DESC = 'desc',
}

export function sortBy<T>(sortByFn: SortByFn<T>): ComparatorFn<T> {
  return (a, b) => {
    const compareArrayA = sortByFn(a);
    const compareArrayB = sortByFn(b);
    let compareIndex = 0;
    while (
      compareArrayA[compareIndex][0] === compareArrayB[compareIndex][0] &&
      compareIndex < compareArrayA.length - 1
    ) {
      compareIndex++;
    }
    const order =
      compareArrayA[compareIndex][1] || compareArrayB[compareIndex][1];
    if (compareArrayA[compareIndex][0] < compareArrayB[compareIndex][0]) {
      return order === Sort.ASC ? -1 : 1;
    }
    if (compareArrayA[compareIndex][0] > compareArrayB[compareIndex][0]) {
      return order === Sort.ASC ? 1 : -1;
    }
    return 0;
  };
}

if (require.main === module) {
  console.log(
    [
      { name: 'carol', age: 21 },
      { name: 'carol', age: 21 },
      { name: 'ana', age: 20 },
      { name: 'carol', age: 25 },
      { name: 'ana', age: 30 },
      { name: 'bernardo', age: 30 },
    ].sort(
      sortBy((person) => [
        [person.name, Sort.ASC],
        [person.age, 'desc'],
      ])
    )
  );
}
