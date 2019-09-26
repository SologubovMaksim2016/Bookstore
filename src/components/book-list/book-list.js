import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc';

import './book-list.css';


class BookList extends Component {

    componentDidMount(){
        //1. receive data
        const {bookstoreService} = this.props;
        const data =bookstoreService.getBooks();
        console.log("TCL: BookList -> componentDidMount -> data", data);
        
        //2.dispatch action to store
        this.props.booksLoaded(data);
    };
   
    render() {
        const {books} = this.props;
        return (
            <ul>
                {
                    books.map( (book) => {
                        return(
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        );
    };
};

const mapStateToProps = ({books}) => {
    return { books }
};

const mapDispathToProps = (dispatch) => {
    return{
        booksLoaded: (newBooks) => {
            dispatch ({
                type: 'BOOKS_LOADED',
                payload: newBooks
            });
        }
    };

};

export default withBookstoreService()(
    connect(mapStateToProps, mapDispathToProps)(BookList)
);