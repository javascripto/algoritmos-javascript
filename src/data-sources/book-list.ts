export interface Book {
  title: string;
  price: number;
}

export const name = 'books';

const books: Book[] = [
  {
    title: 'JavaScript',
    price: 25,
  },
  {
    title: 'PHP',
    price: 15,
  },
  {
    title: 'Java',
    price: 30,
  },
  {
    title: 'Elixir',
    price: 50,
  },
  {
    title: 'Go',
    price: 45,
  },
  {
    title: 'Python',
    price: 20,
  },
];

export default books;
