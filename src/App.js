import React from 'react'
import './App.css'
import Cshelfs from './Cshelfs'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import SearchBar from './SearchBar'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Cshelfs key="Cshelfs" />
            
            <div className="open-search">

              <Link to='/search' >Add a book</Link>
            </div>
          </div>)} />
        <Route path='/search' render={() => (
                <SearchBar />
          )}/>
      </div>
    )
  }
}

export default BooksApp
