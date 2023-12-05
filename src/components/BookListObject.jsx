export const BookListObject = () => {
  return (
    <BookList />
  )
}

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
//             <div className="book" key={item.id}>
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
        // const { img, title, author, id } = item;
        // FIRST OPTION
        // return <Book img={img} title={title} author={author} key={id}/>

        // SECOND OPTION
        // return <Book book={item} key={item.id}/>

        // THIRD OPTION
        return <Book {...item} key={item.id} />
      })}
    </section>
  )
}

const Book = (props) => {
  // FIRST OPTION
  // const {img, title, author} = props;

  // SECOND OPTION
  // const { img, title, author } = props.book;

  // THIRD OPTION
  const { img, title, author } = props;

  return(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
    </article>
  )
}