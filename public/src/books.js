// {
//   id: "5f447132c8ae46c7de530a3d",
//   title: "ad laboris id",
//   genre: "Classics",
//   authorId: 8,
//   borrows: [
//     {
//       id: "5f446f2e5e2952040e9f9b88",
//       returned: false,
//     },
//     {
//       id: "5f446f2ee5be00208a4481e0",
//       returned: true,
//     },
//     {
//       id: "5f446f2ea0502bf8cbc7676a",
//       returned: true,
//     },
//   ],
// }

// {
//   id: 0,
//   name: {
//     first: "Lucia",
//     last: "Moreno",
//   },
// }

function findAuthorById(authors, id) {
  return authors.find(auth => auth.id == id);
}

function findBookById(books, id) {
  return books.find(book => book.id == id);
}

function partitionBooksByBorrowedStatus(books) {
  let out = [], backIn = [];
  // Use the first element in the borrows array to determine if the book is in or out.
  // Add the book object to the corresponding array based on the first step.
  books.forEach(book => (book.borrows[0].returned) ? backIn.push(book) : out.push(book));
  // Wrap the two arrays in another array, and return.
  return [out,backIn];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(rental => {
    // Identify the user for each rental associated with this book.
    let account = accounts.find(user => user.id == rental.id);
    // Format book and user information in an object as the test expects.
    return { "name": account.name, "email": account.email, "returned": rental.returned }
    // Only return the first ten elements
  }).slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
