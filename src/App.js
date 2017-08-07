import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'


class App extends Component {
  state = {
    books:[],
    sbook: []
  }

  componentWillMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  BookSearch = (query) => {
      if(query){
        BooksAPI.search(query).then (sbook => {
          this.setState(state => ({
            sbook : sbook.map(book => {
              const bookInShelf = state.books.find(bis => bis.id === book.id);
              if (bookInShelf) book.shelf = bookInShelf.shelf;
              return book;
            })
          }))
        })
      }
      else {
        this.setState({ sbook: [] })
      }
    }

  updateShelf = (CBook, shelf) => {
   BooksAPI.update(CBook, shelf)
   .then(() => BooksAPI.getAll().then((books) => {
     this.setState({ books })
   }));
   this.setState(state => ({
     books: state.books.map(book => {
       if (book.id === CBook.id) {
         book.shelf = shelf;
       }
       return book;
     })
   }))
  }

  clearArray = () =>{
    this.setState({sbook:[]})
  }

  render() {
    return (
      <div>
      <Route exact path='/' render = {() =>
        <ListBooks
          books = {this.state.books}
          onChange = {this.updateShelf}
        />
      }/>
      <Route path='/search' render = {() =>
        <SearchBooks
          books = {this.state.sbook}
          onChange = {this.updateShelf}
          bookSearch = {this.BookSearch}
          clearArray = {this.clearArray}
        />
      }/>
    </div>
  )}
}

export default App;
