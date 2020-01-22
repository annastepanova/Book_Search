import React from 'react'
import Button from 'react-bootstrap/Button'

const SearchArea = (props) => {

  return (
    <div className="search-area">
      <form onSubmit={props.getBooks} action="">
        <input onChange={props.handleSearch} type="text"/>
        <Button variant="success" type="submit">SEARCH</Button>
        <select defaultValue="Sort" onChange={props.handleSort}>
          <option disabled value="Sort">Sort</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>

      </form>
    </div>
  )
}

export default SearchArea