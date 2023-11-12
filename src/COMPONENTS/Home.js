import React from 'react'
import UserList from './UserList'
import Nav from './Nav'

const Home = ({friends,loader}) => {
  return (
    <div>
        <Nav />
        <UserList friends={friends} loader ={loader} />
    </div>
   
  )
}

export default Home