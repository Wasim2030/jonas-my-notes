const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// ------------------------------------------------------------------------
const books = getBooks();
// books;
// ------------------------------------------------------------------------------------

// async js -> in order to fetch data, to load data from an external web api.
// lets use promises -> to fetch data from an api in browsers we have fetch api.
// fetch -> a function -> into it we can pass a url of an api (google - jsonplaceholder api)
fetch("https://jsonplaceholder.typicode.com/todos"); // eg fetch data from given api
// above it takes some time to fetch. js will move to execute next line of code.
// so, how to wait for this code and do sthg as soon as data arrives -> async comes to play
console.log(fetch("https://jsonplaceholder.typicode.com/todos"));
// above  - it returns a promise.  It is so called promise. (showing- pending). it have multiple state in which a promise can be.
// it can be pending (while still doing sthg in backgroung), can be rejected (if there is an error while fetching data), or it can be fulfilled (means the data has successfully arrived)
// fulfilled - eg data has arrived -> we can handle this state by using then method. on promise we can call then method

// then method will be called as soon as promise is fulfilled. (eg successfully got back with data)
// in this then method -> we need to pass a callback fn -> a code that will be executed as soon as data arrives.

// .then((res) => res.json())
// above - res -> response it has received. This data then need to be converted from json to a js object eg res.json()
// while doing so it will return another promise - eg res.json() -> data takes sometime -> so we need to add another then. here we have final data in js form - .then((data) => console.log(data)) -> fn here in then() -> this fn then get called with the result of the previous fn.
// it will first print jonas from (console.log("jonas"); ) - then later prints array of to do object in console

// .then() -> is a promise method -> in order to handle maoment when the data arrives from the api

//  thus this is how we handle data using promise method

// ------------------------------------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("jonas");

// -------------------------------------------------------------------------------------------------
// ##############################################################################################

// async-await - handle data in cleaner way
// creating a async fn -> a function with async keyword.
//  Now inside this fn we can await the promise eg fetch("https://jsonplaceholder.typicode.com/todos")
// note - waiting works only inside async function
// await - pause the code (inside function) - await fetch("https://jsonplaceholder.typicode.com/todos");
// now we can store this value in a variable res eg response
// const res = await fetch("https://jsonplaceholder.typicode.com/todos");
// same thing with data. - const data = await res.json();

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos();
console.log(todos);
// above -todos is a promise. means - the result value of this async fn is always just promise.

console.log("jonas");

// note - waiting works only inside async function
