import React from 'react';
import BookList from '../book-list';
import ShoppingCartTables from '../shopping-cart-tables/shopping-cart-tables';



const HomePage = () => {
   return (
     <>

    <div><BookList /></div>
    <ShoppingCartTables />
    </>
  );
};

export default HomePage;
