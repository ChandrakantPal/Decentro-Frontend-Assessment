import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center w-screen h-20">
      <Link
        to="/"
        className="mx-4 text-xl cursor-pointer hover:underline hover:text-blue-500"
      >
        Task 1
      </Link>
      <Link
        to="/two"
        className="mx-4 text-xl cursor-pointer hover:underline hover:text-blue-500"
      >
        Task 2
      </Link>
    </nav>
  )
}

export default NavBar
