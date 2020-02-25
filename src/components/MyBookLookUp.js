import React from 'react'
import Book from './Book';
import DebounceInput from 'react-debounce-input'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'


class MyBookLookUp extends React.Component {
    state = {
        Result: []
    }

    search = (err) => {
        const query = err.target.value;
        if (!query) {
            this.setState({ Results: [] });
            return;
        }


        BooksAPI
            .search(query)
            .then(Results => {
                if (!Results || Results.error) {
                    this.setState({ Results: [] });
                    return;
                }


                Results = Results.map((book) => {
                    const bookOnShelf = this
                        .props
                        .books
                        .find(b => b.id === book.id);
                    book.shelf = bookOnShelf
                        ? bookOnShelf.shelf
                        : "none";
                    return book;
                });

                this.setState({ Results });
            });
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput

                            element="input"
                            type="text"
                            minLength={2}
                            placeholder="Search by Author or by Book Title"
                            debounceTimeout={300}
                            onChange={this.search} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.Results && this
                            .state
                            .Results
                            .map((book, index) => (
                                <li key={book.id + index}>
                                    <Book book={book} onShelfChange={this.props.onShelfChange} />
                                </li>
                            ))}
                    </ol>
                </div>
            </div>

        )
    }
}

export default MyBookLookUp