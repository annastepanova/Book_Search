import React from 'react'
import Button from 'react-bootstrap/Button'

const SearchArea = () => {

  return (
    <div className="search-area">
      <form action="">
        <input type="text"/>
        <Button variant="success" type="submit">SEARCH</Button>

      </form>
    </div>
  )
}

export default SearchArea