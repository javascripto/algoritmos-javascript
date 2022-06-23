import { createComparatorFn, simpleComparator } from './comparator';

describe('simpleComparator', () => {
  it('should sort numbers as numbers', () => {
    const list = [20, 2, 5, 3, 7, 4, 5, 3];
    list.sort(simpleComparator);
    expect(list).toEqual([2, 3, 3, 4, 5, 5, 7, 20]);
  });
});

describe('createComparator', () => {
  class Person {
    constructor(public name: string, public age: number) {}
  }
  const unsortedPeople = [
    new Person('fulano', 19),
    new Person('beltrano', 20),
    new Person('ciclano', 17),
    new Person('beltrano', 18),
    new Person('beltrano', 18),
  ];

  it('should create comparator function and sort objects by age', () => {
    const personComparator = createComparatorFn<Person>((person) => [
      person.age,
    ]);
    const list = [...unsortedPeople];
    list.sort(personComparator);
    expect(list).toEqual([
      { name: 'ciclano', age: 17 },
      { name: 'beltrano', age: 18 },
      { name: 'beltrano', age: 18 },
      { name: 'fulano', age: 19 },
      { name: 'beltrano', age: 20 },
    ]);
  });
  it('should create comparator function and sort objects by name', () => {
    const personComparator = createComparatorFn<Person>((person) => [
      person.name,
    ]);
    const list = [...unsortedPeople];
    list.sort(personComparator);
    expect(list).toEqual([
      { name: 'beltrano', age: 20 }, // <- not sorted by age
      { name: 'beltrano', age: 18 },
      { name: 'beltrano', age: 18 },
      { name: 'ciclano', age: 17 },
      { name: 'fulano', age: 19 },
    ]);
  });
  it('should create comparator function and sort objects by name and age', () => {
    const personComparator = createComparatorFn<Person>((person) => [
      person.name,
      person.age,
    ]);
    const list = [...unsortedPeople];
    list.sort(personComparator);
    expect(list).toEqual([
      { name: 'beltrano', age: 18 },
      { name: 'beltrano', age: 18 },
      { name: 'beltrano', age: 20 }, // <- changed position
      { name: 'ciclano', age: 17 },
      { name: 'fulano', age: 19 },
    ]);
  });
});
