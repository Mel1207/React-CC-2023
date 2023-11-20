import React from 'react'

const Greetings = () => {
  return (
    <>
      <Person />
      <Message />
    </>
  )
}


const Person = () => <h2>John Doe</h2>
const Message = () => <p>this is my message</p>

export default Greetings