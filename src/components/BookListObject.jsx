export const BookListObject = () => {
  return (
    <BookList />
  )
}

const books = [
  {
    author: 'Mel Pualon',
    title: 'Learning React 2023',
    img: './images/book1.jpg'
  },
  {
    author: 'Mel Pualon',
    title: 'Learning Frontend 2023',
    img: './images/book2.jpg'
  }
];

// const names = ['Mel',  'John', 'doe']
// const newsNames = names.map( name => {
//   return <h1>{name}</h1>
// })

// ITERATING BOOKLIST ON REGULAR STEP
// const BookList = () => {
//   return (
//     <div className="container">
//       {/* <section className="book-list">
//         {names}
//       </section> */}
//       <section className="book-list">
//         {books.map(item => {

//           return (
//             <div className="book">
//               <img src={item.img} alt={item.title} />
//               <h2>{item.title}</h2>
//               <p>{item.author}</p>
//             </div>
//           )
//         })}
//       </section>
//     </div>
//   )
// }

// ITERATING BOOKLIST ON PROPS
const BookList = () => {
  return (
    <section className="book-list"> 
      {books.map(item => {
        const { img, title, author } = item;
        return <Book img={img} title={title} author={author}/>
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props;

  return(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
    </article>
  )
}