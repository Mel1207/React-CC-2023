export const NewComp = () => {
  return (
    <BookList />
  )
}

const title = 'The Secret Garden'
const author = 'Frances Hodgson Burnet'
const imgSrc = './images/book1.jpg'

const BookList = () => {
  return (
    <div className="container">
      <section className="book-list">
        <Book bookTitle={title} bookAuthor={author} bookImg={imgSrc} />
        <Book bookTitle={title} bookAuthor={author} bookImg={imgSrc} />
      </section>
    </div>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={props.bookImg} alt={props.bookTitle} />
      <h2>{props.bookTitle}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}