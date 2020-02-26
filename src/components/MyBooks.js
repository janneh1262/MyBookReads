import React from 'react';
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import Searchbutton from './SearchButton'


function MyBooks(props) {

    const { onShelfChange } = props;

    const currentlyReading = props.books.filter((book) => book.shelf === 'currentlyReading')
    const wantToRead = props.books.filter((book) => book.shelf === 'wantToRead')
    const read = props.books.filter((book) => book.shelf === 'read')


    return (
        <div className="list-books">
            <div className="list-books-content">
                <div>
                    <BookShelf
                        bookshelfTitle='Currently Reading'
                        bookshelfBooks={currentlyReading}
                        onShelfChange={onShelfChange}

                    />
                    <BookShelf
                        bookshelfTitle='Want to Read'
                        bookshelfBooks={wantToRead}
                        onShelfChange={onShelfChange}
                    />
                    <BookShelf
                        bookshelfTitle='Read'
                        bookshelfBooks={read}
                        onShelfChange={onShelfChange}
                    />
                </div>
            </div>
            <Searchbutton />
        </div>
    )
}
export default MyBooks