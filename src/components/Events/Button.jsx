export const Button = () => {
  return (
    <>
      <BookList />
    </>
    
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

const BookList = () => {
  return (
    <>
      <section className="book-list"> 
        {books.map(item => {
          return <Book {...item} key={item.id} />
        })}
      </section>
    </>
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