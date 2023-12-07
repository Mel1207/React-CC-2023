import { books } from "./books"
import { Book } from "./Book"

export const Es6Modules = () => {
  return (
    <BookList />
  )
}

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
