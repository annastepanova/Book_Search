import React from 'react'
import BookCard from "./BookCard"

const Booklist = (props) => {

  return (
    <div className="list">
      {
        props.books.map((book, index) => {
          return <BookCard 
                 key={index}
                 title={book.volumeInfo.title}
                 image={book.volumeInfo.imageLinks.thumbnail}
                 author={book.volumeInfo.authors}
                 category={book.volumeInfo.categories}
          />
        })
      }

    </div>


  )

}

export default Booklist