import React from 'react'
import Button from 'react-bootstrap/Button'

const SearchArea = (props) => {

  return (
    <div className="search-area">
      <form onSubmit={props.getBooks} action="">
        <input onChange={props.handleSearch} type="text"/>
        <Button variant="success" type="submit">SEARCH</Button>

      </form>
    </div>
  )
}

export default SearchArea