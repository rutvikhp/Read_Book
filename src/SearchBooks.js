import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class SearchBooks extends Component {

  state = {
    query : ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.props.bookSearch(query)
  }

  render(){
    const { query } = this.state
    const {onChange, books, clearArray} = this.props
    return(

      <div className="search-books">
        <div className="search-books-bar">
          <div>
            <Link to='/' className = 'close-search' onClick = {clearArray}>Close</Link>
          </div>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
            <h2 className="bookshelf-title">Books</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books && books.length && books.map((book) => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          {console.log(book.shelf)}
                          <select value = {book.shelf} onChange={(event) =>onChange(book, event.target.value)}>
                            <option value="Move to">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="undefined">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors && (book.authors.map((author)=>(
                        <div>{author}</div>
                      )))}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
        </div>
      </div>
    )
  }
}
export default SearchBooks;
