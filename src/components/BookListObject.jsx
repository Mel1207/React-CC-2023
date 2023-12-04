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

const names = ['Mel',  'John', 'doe']
const newsNames = names.map( name => {
  return <h1>{name}</h1>
})
const BookList = () => {
  return (
    <div className="container">
      {/* <section className="book-list">
        {names}
      </section> */}
      <section className="book-list">{newsNames}</section>
    </div>
  )
}