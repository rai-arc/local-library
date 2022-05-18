const { getBooksPossessedByAccount } = require("./accounts");
const { getBooksBorrowedCount } = require("./home");
function _sliceTen(finalResult) {
  const slicedResult = finalResult.slice(0,10);
  return slicedResult
}

function findAuthorById(authors, id) {
  const searchAuthorId = authors.find((author) => author.id === id);
  return searchAuthorId;
}

function findBookById(books, id) {
  const searchBookId = books.find((book) => book.id === id);
  return searchBookId;
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter((book) => book.borrows[0].returned === false);
  const returnedBooks = books.filter((book) => book.borrows[0].returned === true);
  const partition = [borrowedBooks, returnedBooks];
  return partition;
}

function getBorrowersForBook(book, accounts) {
  const {borrows} = book; 
  const borrowerList = borrows.map(({id, returned}) => { 
    const acc = accounts.find(account => account.id === id); 
    return{ 
      ...acc, 
      returned, 
    };
  });
  return _sliceTen(borrowerList);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
