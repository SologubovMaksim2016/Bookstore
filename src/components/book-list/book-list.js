import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc';
import {fetchBooks, bookAddedToCart} from '../../actions';
import {compose} from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'

//import {bindActionCreators} from 'redux';
import './book-list.css';

const BookList = ({books, onAddedToCart}) => {

    return (
        <ul className="book-list">
            {
                
                books.map( (book) => {
                    return(
                        <li key={book.id}>
                            <BookListItem 
                            book={book}
                            onAddedToCart = {() => onAddedToCart(book.id)} />
                        </li>
                    )
                })
            }
        </ul>
    );
    
};

class BookListContainer extends Component {

    

    componentDidMount(){
        //1. receive data
        /*const {bookstoreService, booksLoaded, booksRequested, booksError} = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data) =>  booksLoaded(data)) 
            .catch((err) => booksError(err));*/
        this.props.fetchBooks();        
        //2.dispatch action to store
        
    };
   
    render() {
        const {books, loading, error, onAddedToCart} = this.props;    

        if (loading) {
            return <Spinner />
        }  
        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books} onAddedToCart = {onAddedToCart}/>
        /*return (
            <ul className="book-list">
                {
                    books.map( (book) => {
                        return(
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        );*/
    };
};




const mapStateToProps = ({books, loading, error}) => {   
    // console.log("state---",state);
    return { books, loading, error};
};

const mapDispathToProps = (dispath, {bookstoreService}) => {

    //const {bookstoreService} = ownProps;

    return {
       
        onAddedToCart: (id) => dispath(bookAddedToCart(id)),
        fetchBooks: fetchBooks(bookstoreService, dispath)
        /*fetchBooks: () => {
        
        dispath(booksRequested());
        bookstoreService.getBooks()
            .then((data) => dispath(booksLoaded(data))) 
            .catch((err) => dispath(booksError(err)));
        }*/
    }
};
/*const mapDispathToProps = (dispatch) => {
    return bindActionCreators({booksLoaded}, dispatch);    
    // return{
    //     booksLoaded: (newBooks) => {
    //         dispatch (booksLoaded(newBooks));
    //     }
    // };

};*/
export default compose(
    withBookstoreService(),
    connect( mapStateToProps, mapDispathToProps )
)( BookListContainer );

/*
export default withBookstoreService()(
    connect(mapStateToProps, {booksLoaded})(BookList)
);*/