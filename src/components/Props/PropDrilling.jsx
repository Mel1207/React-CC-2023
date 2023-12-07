export const PropDrilling = () => {
  return (
    <>
      <BookList />
    </>
  )
}
// PROP DRILLING IS A PROCESS OF PROPS FROM PARENT TO CHILD WHETHER IT HAS NESTED OR HOW MANY CHILD IT HAS YOU STILL HAVE TO PASS ALL YOUR DATA FROM PROPS
const books = [
  {
    author: 'Mel Pualon',
    title: 'Learning React 2023',
    img: './images/book1.jpg',
    id: 1
  },
  {
    author: 'Mel Pualon',
    title: 'Learning Frontend 2023',
    img: './images/book2.jpg',
    id: 2
  }
];

const BookList = () => {
  // const someValue = 'shakeAndBake'
  // const displayValue = () => {
  //   console.log(someValue)
  // }
  const getBook = (id) => {
    const book = books.find(item =>  item.id === id)
    console.log(book)
  }
  return (
    <>
      <section className="book-list"> 
        {books.map(item => {
          return <Book {...item} key={item.id} getBook={getBook}/>
        })}
      </section>
    </>
  )
}

const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  return(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => {
        getBook(id)
      }}>Click Me</button>
      <p>{author}</p>
    </article>
  )
}

