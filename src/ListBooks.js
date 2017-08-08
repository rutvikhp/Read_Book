import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class ListBooks extends Component {

bookOnShelf = (shelfTitle) => {
  return(
    <ol className="books-grid">
      {this.props.books.map((book)=>(
        <div key={book.id}>
          {book.shelf == shelfTitle &&(
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <select value = {book.shelf} onChange={(event) =>this.props.onChange(book, event.target.value)}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && (book.authors.map((author,i)=>(
                  <div key={i}>{author}</div>
                  )))}
                </div>
              </div>
            </li>
          )}
        </div>
        ))}
    </ol>
  )
}

  render(){
    return(
      <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                {this.bookOnShelf("currentlyReading")}
              </div>

              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                {this.bookOnShelf("wantToRead")}
              </div>


              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                {this.bookOnShelf("read")}
              </div>
            </div>
        </div>
        <div className = 'open-search'>
          <Link
            to='/search'>
            Add a Book
          </Link>
        </div>
      </div>
    </div>
    )
  }
}
export default ListBooks;
