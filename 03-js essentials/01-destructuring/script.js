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
    pages: 4,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 0,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 0,
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
    hasMovieAdaptation: true,
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

//destructuring
const book = getBook(1);
console.log(book);
const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
  book;
// console.log(title, author);

// // rest operator
// const [...geners] = genres;
// console.log(geners);

// // spread operator
// const NewGeners = [...geners, "action"];
// console.log(NewGeners);

// //destructuring the objects
// const updatedBook = {
//   ...book,
//   // adding new property
//   moviePublicationDate: "2025-04-22",

//   // overriding the property
//   pages: 1234,
// };
// console.log(updatedBook);

// template literals
const summary = `  The book i.e "${book.title}" has ${book.pages} number of page was written by ${book.author} published in ${book.publicationDate}`;
summary;

// ternary operator
const pageRange =
  book.pages > 100 ? "Page is greater than 100" : "page is less than 1000";

pageRange;

//arrow functions
const GettingYearOnly = () => {
  return publicationDate.split("-")[0];
};
const showingPublicationDate = () => {
  return publicationDate;
};
//split split  the date sepreated by "-"
console.log(showingPublicationDate().split("-"));
console.log(GettingYearOnly());

//short circuting in logical operators
console.log(hasMovieAdaptation && "this book has movie also");

//falsy value : 0, "", null, undefined accetpt all other  are truthy value
// incase of AND if FIRST_PLACE is true it returns SECOND_VALUE
console.log(0 && "This movie has zero pages");
// incase of OR it returns FIRST_VAL if true if false it returns SECOND_VAL
console.log("ram" || "yadav");
console.log(
  book.translations.spanish || "This book does not have spanish translation"
);
console.log(
  book.translations.english && "This book does not have spanish translation"
);

//nullish coalsing ( prevents  the  conditions for  falsy  value)
const count = book.reviews.librarything.reviewsCount;
count;
// we want number if counts but is not shaowing to fix it nulissh cloeasion  technique is used
console.log(book.reviews.librarything.reviewsCount || "no data");

// it returns the SECOND_VVAL if the FIRST_VAL is undefinedd or null not in case of 0
console.log(book.reviews.librarything.reviewsCount ?? "no data");
