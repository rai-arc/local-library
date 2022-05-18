function _sliceFive(finalResult) {
  const slicedResult = finalResult.slice(0,5);
  return slicedResult
}

function _bigSmallSort(sortMe) {
  const sorted = sortMe.sort((big, small) => big.count < small.count ? 1 : -1);
  return sorted
}

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowCount = books.filter((book) => book.borrows[0].returned === false)
  return borrowCount.length;
}

function getMostCommonGenres(books) {
  const result = books.reduce((acc, book) => {
    if(!acc[book.genre]){
      acc[book.genre] = { name: book.genre, count: 1};
    }else{
      acc[book.genre].count += 1;
    }
    return acc
  }, []);
  const newResult = Object.values(result);
  const sortedResult = _bigSmallSort(newResult);
  return _sliceFive(sortedResult);
}

function getMostPopularBooks(books) {
  const mostPop = books.map(book => ({name: book.title, count:book.borrows.length}));
  const sortedPop = _bigSmallSort(mostPop);
  return _sliceFive(sortedPop);
}

function getMostPopularAuthors(books, authors) {
  const authorsList = books.reduce((acc, book) => {
    const { authorId, borrows} = book;
    const findAuthor = authors.find(author => author.id === authorId);
    const fullName = `${findAuthor.name.first} ${findAuthor.name.last}`;
    const bookCount = borrows.length;
    const authorCheck = acc.find(authName => authName.name === fullName);
    if(!authorCheck) {
      const newAuthor = {name: fullName, count: bookCount};
      acc.push(newAuthor);
    }else{
      authorCheck.count += bookCount
    }
    return acc
  }, []);
  const sortedAuthors = _bigSmallSort(authorsList);
  return _sliceFive(sortedAuthors);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
