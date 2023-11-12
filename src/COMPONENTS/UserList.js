import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuid} from 'uuid'
import '../STYLES/userlist.css'

const UserList = ({friends,loader}) => {
  return (
    <div className='userlist'>
        <h1>Your Friends</h1>
    {loader ? (<h1>Loading...</h1>):(
      <ul>
      {friends.length?
      friends.map(friend=>(
      <Link to={`/${friend}`}><li key={uuid()}>{friend}</li></Link> 
      )):<div>you dont have any friends to show</div>
      }
    </ul>
    )}
    
  </div>
  )
}

export default UserList