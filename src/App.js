import './App.css';
import {useEffect, useState} from 'react'
import api from './API/api'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './COMPONENTS/Home';
import UserList from './COMPONENTS/UserList';
import ChatPage from './COMPONENTS/ChatPage';
import Search from './COMPONENTS/Search';
import AuthPage from './COMPONENTS/AuthPage';

function App() {
  const navigate = useNavigate()
  const [users,setUsers] = useState([])
  const [username,setUsername] = useState('aalan')
  const [usernameSI,setUsernameSI] = useState('')
  const [usernameSU,setUsernameSU] = useState('')
  const [passwordI,setPasswordI] = useState('')
  const [passwordU,setPasswordU] = useState('')
  const [friends,setFriends] = useState([])
  const [chats,setChats] = useState([])
  const [search,setSearch] = useState('')
  const [searchList,setSearchList] = useState([])
  const [reciever,setReciever] = useState('')
  const [message,setMessage] = useState('')
  const [loader,setLoader] = useState(true)
  const [load,setLoad] = useState(true)
  const [user,setUser] = useState([])
  const [loading,setLoading] = useState(false)
useEffect(()=>{
  const fetchData = async()=>{
      setUsername(JSON.parse(localStorage.getItem('kitty-user')))
    const response = await api.get(`/main/${username}`)
    setFriends(response.data)
    setLoader(false)
  }
  fetchData()
},[username])
useEffect(()=>{
  if(!username){
    setUsername(JSON.parse(localStorage.getItem('kitty-user')))
  }
  const fetchChats = async()=>{
    const chats = await api.get(`/chats/${username}`)
    setChats(chats.data)
    setLoad(false)
  }
    fetchChats()
},[load])

useEffect(()=>{
  setLoader(true)
  const fetchUsers = async()=>{
    const Cusers = await api.get('/users')
    setUser(Cusers.data)
    setLoader(false)
  }
    fetchUsers()
},[loading])

const handleSubmit = async(e)=>{
  try{
      e.preventDefault()
      let chat = {
        sender :username,
        reciever :reciever,
        message :message
      }
      await api.post('/chats',chat)
      setLoad(true)
      setMessage(message)
  }catch(err){
      console.log(err.message)
  }   
}
const handleSearch=(e)=>{
      e.preventDefault()
      setLoading(true)
      const filtered = user.filter(user => user.username.toLowerCase().includes(search.toLowerCase()));
      setSearchList(filtered)
}
const handleSignIn=async(e)=>{
  try{
    e.preventDefault()
    const req = {username:usernameSI,password:passwordI}
    const result = await api.post('auth/signin',req)
    if(result.data.message =="ok"){
          setLoad(true)
          setUsername(usernameSI)
          navigate('/home')
          setUsernameSI('')
          setPasswordI('')
          localStorage.setItem('kitty-user',JSON.stringify(username))
    }
    else{
      alert("enter correct user id and password")
    }
  }catch(err){
    console.log(err.message)
  } 
}
const handleSignUp=async(e)=>{
  try {
    e.preventDefault()
    const req = {username: usernameSU,password:passwordU}
    const result = await api.post('auth/signup',req)
    if (result.data.message == "ok") {
      setLoad(true)
      setUsername(usernameSU)
      navigate('/home')
      setUsernameSU('')
      setPasswordU('')
      localStorage.setItem('kitty-user',JSON.stringify(username))
    }
  } catch (error) {
    console.log(error.message)
  }
}


  return(
    <div className="app">
   <Routes>
    <Route path='/' element={<AuthPage usernameSI={usernameSI} usernameSU={usernameSU} setUsernameSI={setUsernameSI} setUsernameSU={setUsernameSU} passwordI={passwordI} passwordU={passwordU} setPasswordI={setPasswordI} setPasswordU={setPasswordU} handleSignIn={handleSignIn} handleSignUp={handleSignUp}/>}/>
    <Route path='/home' element={<Home friends={friends} loader ={loader} />} />
    <Route path = '/:id' element = {<ChatPage chats = {chats} handleSubmit={handleSubmit} message={message} setMessage={setMessage} setReciever={setReciever} />} />
    <Route path="/search" element={<Search loader={loader} search={search} setSearch={setSearch} searchList = {searchList} setSearchList={setSearchList} handleSearch={handleSearch} />} />
   </Routes>
   </div>
  )
}

export default App;
