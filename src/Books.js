import React, { Component } from 'react'
import SearchArea from "./SearchArea"
import axios from 'axios'

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
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.searchField}`).then((response) => {
      this.setState({
        books: response.data
      })
    })
  }


  render() {
    return (
      <div>
        <SearchArea getBooks={this.getBooks} handleSearch={this.handleSearch}/>
      </div>
    )
  }
}

export default Books
