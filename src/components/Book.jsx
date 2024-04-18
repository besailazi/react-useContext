import React from 'react'

const Book = ({book, setIsDisplayingList}) => {
  return (
	 <>
	 <p>Title:{book.title}</p>
	 <div>
		Author:{book.author} <br />
		Summary:{book.summary} <br />
	 </div>
	 <button onClick={()=>setIsDisplayingList(true)}>Back</button>
	 </>
  )
}

export default Book