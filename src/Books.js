import React, { Component } from 'react'
import SearchArea from "./SearchArea"

class Books extends Component {

  state = {
    books: [],
    searchField: ''
  }


  render() {
    return (
      <div>
        <SearchArea />
      </div>
    )
  }
}

export default Books
