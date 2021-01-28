// {
//   id: "5f446f2ed46724f41c9fc431",
//   picture: "https://api.adorable.io/avatars/75/ferrell.morris@ecolight.com",
//   age: 35,
//   name: {
//     first: "Ferrell",
//     last: "Morris",
//   },
//   company: "ECOLIGHT",
//   email: "ferrell.morris@ecolight.com",
//   registered: "Thursday, February 8, 2018 1:16 PM",
// }

function findAccountById(accounts, id) {
  return accounts.find(account => account.id == id);
}

function sortAccountsByLastName(accounts) {
  // Convert all last names to standard format, arrange with lower letters first. 
  // Return that list.
  return accounts.sort((accA, accB) => (accA.name.last.toLowerCase() < accB.name.last.toLowerCase()) ? -1:1 );
}

function numberOfBorrows(account, books) {
  let borrows = []
  // Loop over every book, and accumulate every rental on file.
  books.forEach(book => {
    borrows = borrows.concat(book.borrows);
  })
  // Create an array holding every rental for this book. 
  // Return the length.
  return borrows.filter(rental => rental.id == account.id).length;
}

function getBooksPossessedByAccount(account, books, authors) {
  let borrows = {}
  // For every book on file, figure out if this user has borrowed it and still has it.
  books.forEach(book => {
    borrows[book.title] = book.borrows.filter(rental => (rental.id == account.id) && !rental.returned);
  });
  // Eliminate all books never checked out by the user.
  // Return only the book's name.
  let result = Object.entries(borrows).filter(bookAry => bookAry[1].length > 0).map(book => book[0]);
  // Get the author's information for every book title.
  // Format the book and author information in a single object as the test expects.
  return result.map(bookTitle => {
    let auth = authors.find(author => author.id == (books.find(book => bookTitle == book.title).authorId));
    return {
      "title": bookTitle, 
      "author": auth
    }
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
