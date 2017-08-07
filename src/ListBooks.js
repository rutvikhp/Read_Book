import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class ListBooks extends Component {

  render(){
    const {books, onChange} = this.props
    return(
      <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div className="bookshelf">


              <h2 className="bookshelf-title">Currently Reading</h2>
              {books.map((book)=>(
                <div>
                  {book.shelf == "currentlyReading" &&(
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        <li>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                              <div className="book-shelf-changer">
                                <select value = {book.shelf} onChange={(event) =>onChange(book, event.target.value)}>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors && (book.authors.map((author)=>(
                              <div>{author}</div>
                            )))}</div>
                          </div>
                        </li>
                      </ol>
                    </div>
                  )}
                </div>
              ))}


              <h2 className="bookshelf-title">Want to Read</h2>
              {books.map((book)=>(
                <div>
                  {book.shelf == "wantToRead" &&(
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        <li>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                              <div className="book-shelf-changer">
                                <select value = {book.shelf} onChange={(event) =>onChange(book, event.target.value)}>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors && (book.authors.map((author)=>(
                              <div>{author}</div>
                            )))}</div>
                          </div>
                        </li>
                      </ol>
                    </div>
                  )}
                </div>
              ))}


              <h2 className="bookshelf-title">Read</h2>
              {books.map((book)=>(
                <div>
                  {book.shelf == "read" &&(
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        <li>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                              <div className="book-shelf-changer">
                                <select value = {book.shelf} onChange={(event) =>onChange(book, event.target.value)}>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors && (book.authors.map((author)=>(
                              <div>{author}</div>
                            )))}</div>
                          </div>
                        </li>
                      </ol>
                    </div>
                  )}
                </div>
              ))}
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
