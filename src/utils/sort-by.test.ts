import { Sort, sortBy } from './sort-by';

describe('sortBy', () => {
  const people = [
    { name: 'John', age: 20 },
    { name: 'Mary', age: 30 },
    { name: 'Mary', age: 15 },
    { name: 'Peter', age: 25 },
  ];

  it('should sort people by name ASC and age ASC', () => {
    const list = [...people];
    const sorted = list.sort(
      sortBy((person) => [
        [person.name, Sort.ASC],
        [person.age, Sort.ASC],
      ])
    );
    expect(sorted).toEqual([
      { name: 'John', age: 20 },
      { name: 'Mary', age: 15 },
      { name: 'Mary', age: 30 },
      { name: 'Peter', age: 25 },
    ]);
  });

  it('should sort people by name ASC and age DESC', () => {
    const list = [...people];
    const sorted = list.sort(
      sortBy((person) => [
        [person.name, 'asc'],
        [person.age, 'desc'],
      ])
    );
    expect(sorted).toEqual([
      { name: 'John', age: 20 },
      { name: 'Mary', age: 30 },
      { name: 'Mary', age: 15 },
      { name: 'Peter', age: 25 },
    ]);
  });

  it('should sort people by name DESC and age ASC', () => {
    const list = [...people];
    const sorted = list.sort(
      sortBy((person) => [
        [person.name, Sort.DESC],
        [person.age, Sort.ASC],
      ])
    );
    expect(sorted).toEqual([
      { name: 'Peter', age: 25 },
      { name: 'Mary', age: 15 },
      { name: 'Mary', age: 30 },
      { name: 'John', age: 20 },
    ]);
  });

  it('should sort people by name DESC and age DESC', () => {
    const list = [...people];
    const sorted = list.sort(
      sortBy((person) => [
        [person.name, Sort.DESC],
        [person.age, Sort.DESC],
      ])
    );
    expect(sorted).toEqual([
      { name: 'Peter', age: 25 },
      { name: 'Mary', age: 30 },
      { name: 'Mary', age: 15 },
      { name: 'John', age: 20 },
    ]);
  });

  it('should not sort when objects are equal', () => {
    const list = [{ name: 'john' }, { name: 'john' }];
    const [first, second] = list;
    const sorted = list.sort(sortBy((person) => [[person.name, 'asc']]));
    expect(sorted).toEqual([first, second]);
    expect(sorted[0]).toBe(first);
    expect(sorted[1]).toBe(second);
  });
});
