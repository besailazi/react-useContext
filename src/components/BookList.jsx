import React from 'react'
import { bookContext } from './BookContentProvider';
import { useState, useContext } from 'react';
import Book from './Book';

const BookList = () => {
	const [selectedBook, setSelectedBook] = useState({})
	const [isDisplayingList, setIsDisplayingList] = useState(true);
	const books = useContext(bookContext);

	const handleTitleClick = (currentBookId)=>{
		const filteredBooks = books.filter((book)=> currentBookId.toString() === book.id.toString())
		setSelectedBook(filteredBooks[0])
		setIsDisplayingList(false)

	}
	
  return (
	 <>
	 {isDisplayingList ? (
	 <ul>
	 {books.map((book)=>{
		return <li key={book.id} onClick={()=>handleTitleClick(book.id)}>{book.title}</li>
	
	 })}
	 </ul>
	 ):(
	 <Book book={selectedBook} setIsDisplayingList={setIsDisplayingList}/>
)}
	 </>
  )
}

export default BookList