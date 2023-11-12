import React from 'react'
import { useParams } from 'react-router-dom'
import '../STYLES/chat.css'

const ChatPage = ({chats,handleSubmit,setReciever,message,setMessage}) => {
    const {id} = useParams()
    let chat = chats.filter(chat => chat.reciever ==id  || chat.sender ==id)
    setReciever(id)
  return (
    <div className='chat'>
        <h1>{id}</h1>
        <ul>
            {chat.length?chat.map(msg =>(
                <li key={msg._id}>{`@${msg.sender} :=>  ${msg.message}`}</li>
            )):<div>{`you didn't talk yet to ${id}`}</div>}
        </ul>
        <form action="" onSubmit={handleSubmit}>
            <textarea placeholder='Type your message here' value={message} onChange={(e)=>setMessage(e.target.value)}  cols="30" rows="10" required></textarea>
            <button type='submit'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00008b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
  </button>
        </form>
    </div>
  )
}

export default ChatPage