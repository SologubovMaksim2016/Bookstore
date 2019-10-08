
const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};
export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  }
};

export const bookRemovedFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId
  }
};

export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId
  }
};

// export const cartPositionIncrease = (bookId) => {
//   return {
//     type: 'CART_POSITION_INCREASE',
//     payload: bookId
//   }
// };



const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload:error    
  }
};

const fetchBooks = (bookstoreService,dispath) => () => {  
  dispath(booksRequested());
  bookstoreService.getBooks()
      .then((data) => dispath(booksLoaded(data))) 
      .catch((err) => dispath(booksError(err)));
  }

export {  
  fetchBooks
};
