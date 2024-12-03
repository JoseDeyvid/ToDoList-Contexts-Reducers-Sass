import React from 'react'

type Props = {
  setModalIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ setModalIsActive }: Props) => {
  const showModalHandler = () => {
    setModalIsActive(true);
  }
  return (
    <header>
      <h1>To-Do List With React</h1>
      <button onClick={showModalHandler}>+ Add Task</button>
    </header>
  )
}

export default Header