import React from 'react'
import "./Search.css"

export default function Search() {
  return (
    <div className="search">
        <input type="text" id='search-bar' placeholder='Search for Hackathons' />
        <button className="px-4 py-2 border border-blue-500 rounded bg-blue-500 text-white font-semibold text-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300" onClick={() => handleSearch()}>
  Search
</button>

    </div>
  )
}
