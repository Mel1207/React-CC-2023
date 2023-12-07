export const Book = (props) => {
  const { img, title, author } = props;
  const displayTitle = () => {
    console.log(title)
  }
  return(
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>Display Title</button>
      <p>{author}</p>
    </article>
  )
}