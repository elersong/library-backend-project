function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  // The number of books borrowed is equal to the number of `false` values in book borrows arrays.
  // Sum those up for all books and return that sum.
  return books.reduce( (count, book) => { return (book.borrows[0].returned) ? count : (count+1) }, 0);
}

function getMostCommonGenres(books) {
  let bookGenresObj = {};
  // Find out how many books there are for each genre
  books.forEach(book => {
    if (bookGenresObj[book.genre]) {
      bookGenresObj[book.genre]++;
    } else {
      bookGenresObj[book.genre] = 1;
    }
  });
  // Convert object to array of genre names (keys), and sort it according to the number of books (values).
  // Only return the first five, and make sure they're in the format the test expects.
  return Object.keys(bookGenresObj).sort((genreA, genreB) => bookGenresObj[genreB] - bookGenresObj[genreA]).slice(0,5).map((genre) =>  {
    return { 
      "name": genre, 
      "count": bookGenresObj[genre]
    }
  });
}

function getMostPopularBooks(books) {
  return books.sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length ).slice(0,5).map(book => {return {"name": book.title, "count": book.borrows.length}});
}

// No need to export this function because
function entirelyUnnecessaryHelperFunctionBecauseThisProjectRequiresOne(books){
  return books.map(book => {
    return {
      "author": book.authorId,
      "rentals": book.borrows.length 
    }
  }).sort((authA, authB) => authB.rentals - authA.rentals).slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let authCounts = entirelyUnnecessaryHelperFunctionBecauseThisProjectRequiresOne(books);

  return authCounts.map(({author, rentals}) => {
    let writer = authors.find(authObj => authObj.id == author);
    let fullName = `${writer.name.first} ${writer.name.last}`;
    return {
      "name": fullName, 
      "count": rentals 
    };
  });
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
