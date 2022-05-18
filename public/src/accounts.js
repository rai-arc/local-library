function findAccountById(accounts, id) {
  const searchId = accounts.find((account) => account.id === id);
  return searchId;
}

function sortAccountsByLastName(accounts) {
  const sortAcc = accounts.sort((lastA, lastB) => lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1 : -1);
  return sortAcc
}

function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  let totalNumber = 0;

  books.forEach(book => 
    book.borrows.forEach(borrow => {
    if (accountId === borrow.id) 
    totalNumber++}));
  return totalNumber;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  let booksPossessed = [];

  books.forEach(book => 
    book.borrows.forEach(borrow => {
    if (accountId === borrow.id && !borrow.returned) {booksPossessed.push(book)}}));

  booksPossessed.forEach(book => 
    book.author = authors.find(author => 
    book.authorId === author.id));
  return booksPossessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
