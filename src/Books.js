import React, { Component } from 'react'
import SearchArea from "./SearchArea"
import Booklist from "./Booklist"
import request from 'superagent'

class Books extends Component {

  state = {
    books: [],
    searchField: ''
  }

  handleSearch = (event) => {
    this.setState({searchField: event.target.value})
  }

  getBooks = (event) => {
    event.preventDefault()
    request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({q: this.state.searchField})
    .then((data) => {
      console.log(data)
      const cleanData = this.cleanData(data)
      this.setState({
        books: cleanData
      })
    })
    }
  

  cleanData = (data) => {
    const cleanData = data.body.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
        book.volumeInfo['imageLinks'] = { thumbnail: "https://www.dyslexiacenterofutah.org/global/assets/images/unavailable.png"}
      }
      return book
    })
    return cleanData
  }

 

  render() {
    return (
      <div>
        <SearchArea getBooks={this.getBooks} handleSearch={this.handleSearch}/>
        <Booklist books={this.state.books}/>
      </div>
    )
  }
}

export default Books
