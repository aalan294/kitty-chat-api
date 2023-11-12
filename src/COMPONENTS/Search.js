import React from 'react'
import { Link } from 'react-router-dom'
import '../STYLES/search.css'

const Search = ({search,setSearch,searchList,handleSearch}) => {
  return (
    
    <div className='search'>
        <form action="" onSubmit={handleSearch}>
            <input type="text" placeholder='search here' value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button type='submit'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00008b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
        </form><br />
        <ul>
            {searchList.map(list =>(
                <Link to={`/${list.username}`}><li key={list._id}>{list.username}</li></Link>
            ))}
        </ul>
    </div>
   
  )
}

export default Search