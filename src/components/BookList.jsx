export const BookList = () => {
  return (
    <BookListComp />
  )
}

// const title = 'The Secret Garden'
// const author = 'Frances Hodgson Burnet'
// const imgSrc = './images/book1.jpg'

const bookOne = {
  author: 'Mel Pualon',
  title: 'Learning React 2023',
  img: './images/book1.jpg'
}

const bookTwo = {
  author: 'Mel Pualon',
  title: 'Learning Frontend 2023',
  img: './images/book2.jpg'
}

const BookListComp = () => {
  return (
    <div className="container">
      <section className="book-list">
        <Book bookTitle={bookOne.title} bookAuthor={bookOne.author} bookImg={bookOne.img} />
        <Book bookTitle={bookTwo.title} bookAuthor={bookTwo.author} bookImg={bookTwo.img} />
      </section>
    </div>
  )
}

// ACCESSING PROPS IN NORMAL VERSION
// const Book = (props) => {
//   console.log(props)
//   return (
//     <article className="book">
//       <img src={props.bookImg} alt={props.bookTitle} />
//       <h2>{props.bookTitle}</h2>
//       <h4>{props.bookAuthor}</h4>
//     </article>
//   )
// }

// ACCESSING PROPS IN SHORTER VERSION -> DESTRUCTURING PROPS
// const Book = (props) => {
//   const {bookImg, bookTitle, bookAuthor} = props
//   return (
//     <article className="book">
//       <img src={bookImg} alt={bookTitle} />
//       <h2>{bookTitle}</h2>
//       <h4>{bookAuthor}</h4>
//     </article>
//   )
// }

// ACCESSING PROPS INSIDE PARAMETER
const Book = ({bookImg, bookTitle, bookAuthor}) => {
  return (
    <article className="book">
      <img src={bookImg} alt={bookTitle} />
      <h2>{bookTitle}</h2>
      <h4>{bookAuthor}</h4>
    </article>
  )
}