import React from 'react'
import { createContext, useState } from 'react'
import BookList from './BookList'

export const bookContext = createContext()

 const BookContentProvider = () => {
	const [books, setBooks] = useState([
		{
		  title: "To Kill a Mockingbird",
		  author: "Harper Lee",
		  pages: 336,
		  id: 1,
		  genre: "Classic Fiction",
		  summary: "A story set in the American South during the 1930s, focusing on racial injustice and the moral growth of its young protagonist, Scout Finch."
		},
		{
		  title: "1984",
		  author: "George Orwell",
		  pages: 328,
		  id: 2,
		  genre: "Dystopian Fiction",
		  summary: "A dystopian novel set in a totalitarian regime, where individualism and independent thinking are suppressed, and the government controls every aspect of life."
		},
		{
		  title: "The Great Gatsby",
		  author: "F. Scott Fitzgerald",
		  pages: 180,
		  id: 3,
		  genre: "Classic Fiction",
		  summary: "A tale of wealth, love, and the American Dream set in the Roaring Twenties, revolving around the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan."
		},
		{
		  title: "Pride and Prejudice",
		  author: "Jane Austen",
		  pages: 432,
		  id: 4,
		  genre: "Romance",
		  summary: "A romantic novel that follows the tumultuous relationship between Elizabeth Bennet and Mr. Darcy against the backdrop of Georgian-era England."
		},
		{
		  title: "The Catcher in the Rye",
		  author: "J.D. Salinger",
		  pages: 224,
		  id: 5,
		  genre: "Coming-of-age Fiction",
		  summary: "Narrated by the disillusioned teenager Holden Caulfield, the novel explores themes of alienation, identity, and the search for authenticity in a phony world."
		},
		{
		  title: "To Kill a Mockingbird",
		  author: "Harper Lee",
		  pages: 336,
		  id: 6,
		  genre: "Classic Fiction",
		  summary: "A story set in the American South during the 1930s, focusing on racial injustice and the moral growth of its young protagonist, Scout Finch."
		},
		{
		  title: "Moby-Dick",
		  author: "Herman Melville",
		  pages: 624,
		  id: 7,
		  genre: "Adventure",
		  summary: "An epic tale of obsession and revenge, following Captain Ahab's relentless pursuit of the white whale Moby Dick, which leads his crew to disaster."
		},
		{
		  title: "The Hobbit",
		  author: "J.R.R. Tolkien",
		  pages: 310,
		  id: 8,
		  genre: "Fantasy",
		  summary: "The enchanting tale of Bilbo Baggins, a hobbit who embarks on an epic quest to reclaim the Lonely Mountain and its treasure from the dragon Smaug."
		},
		{
		  title: "Harry Potter and the Sorcerer's Stone",
		  author: "J.K. Rowling",
		  pages: 320,
		  id: 9,
		  genre: "Fantasy",
		  summary: "The first book in the beloved Harry Potter series, following the young wizard Harry as he discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry."
		},
		{
		  title: "The Lord of the Rings",
		  author: "J.R.R. Tolkien",
		  pages: 1178,
		  id: 10,
		  genre: "Fantasy",
		  summary: "An epic high fantasy novel that follows Frodo Baggins and his companions as they embark on a perilous journey to destroy the One Ring and defeat the dark lord Sauron."
		}
  ]);

  return (
	 <>
	 <bookContext.Provider value={books}>
	 <BookList />
	 </bookContext.Provider>
	 
	 </>
  )
}

export default BookContentProvider