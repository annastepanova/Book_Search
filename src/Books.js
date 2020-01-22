import React, { Component } from 'react'
import SearchArea from "./SearchArea"
import Booklist from "./Booklist"
import request from 'superagent'

class Books extends Component {

  state = {
    books: [],
    searchField: '',
    sort: ''
  }

  handleSearch = (event) => {
    this.setState({searchField: event.target.value})
  }

  handleSort = (event) => {
    this.setState({sort: event.target.value})
  }

  getBooks = (event) => {
    event.preventDefault()
    request
      .get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&maxResults=40`)
    .then((data) => {
      const cleanData = this.cleanData(data)
      this.setState({
        books: cleanData
      })
    })
    }
  

  cleanData = (data) => {
    const cleanData = data.body.items.map((book) => {

      if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
        book.volumeInfo['publishedDate'] = '0000'
      }
      else if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
        book.volumeInfo['imageLinks'] = { thumbnail: "https://www.dyslexiacenterofutah.org/global/assets/images/unavailable.png" }
      }
      return book
    })
    return cleanData
  }

 

  render() {
    const sortedBooks = this.state.books.sort((a, b) => {
      if (this.state.sort === 'Newest') {
        return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
      }
      else if (this.state.sort === 'Oldest') {
        return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4)) 
      }
    })

    return (
      <div>
        <SearchArea getBooks={this.getBooks} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
        <Booklist books={sortedBooks}/>
      </div>
    )
  }
}

export default Books
