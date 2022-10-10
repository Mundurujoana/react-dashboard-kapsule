import React from 'react'
import  './Navbar.css'

const SearchBar = () => {
  return (
    <div>
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input type="text" placeholder="Search" />
        <button type="submit" className='submit'>Search</button>
    </form>
    </div>
  )
}

export default SearchBar
