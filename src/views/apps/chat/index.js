// ** React Imports
import { Fragment, useState, useEffect } from 'react'

import { Menu } from 'react-feather'
// ** Chat App Component Imports

import Chat from './Chat'
import Sidebar from './SidebarLeft'
import UserProfileSidebar from './UserProfileSidebar'
import ChatSection from './ChatSection'
import axios from 'axios'
// ** Third Party Components
import './chatStyle.css'

import '@styles/base/pages/app-chat.scss'
import '@styles/base/pages/app-chat-list.scss'

const user = JSON.parse(localStorage.getItem('user'))
const token = localStorage.getItem('token')

const AppChat = () => {

  const [filteredChat, setFilterChat] = useState({})
  const [chats, setChats] = useState([])

  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')

    if (user && token) {
      const baseUrl = 'https://stormy-sierra-19463.herokuapp.com'
      const apiVersion = 'api/v1'
      const entity = 'chat'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}`
      const options = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
  
      try {
        const response = await axios.get(endPoint, options)
        console.log(response.data)
        if (response.status === 200) {
          const chats = response.data.data.chats
          setChats(chats)        
        } 
      } catch (e) {
        
      }
    }
  }, [setChats])

  async function renderChat(chatId) {
    
    if (user && token) {
      const baseUrl = 'https://stormy-sierra-19463.herokuapp.com'
      const apiVersion = 'api/v1'
      const entity = 'chat'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}`
      const options = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
  
      try {
        const response = await axios.get(endPoint, options)
        if (response.status === 200) {
          const chats = response.data.data.chats
          setChats(chats)
          const filteredChat = chats.filter(chat => chat._id === chatId)
          setFilterChat(filteredChat[0])
        }
      } catch (e) {
        
      }
    }

  } 

  async function sendMessage(chatId, message) {
    
    if (user && token) {
      const baseUrl = 'https://stormy-sierra-19463.herokuapp.com'
      const apiVersion = 'api/v1'
      const entity = 'chat'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/message`
      const options = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
  
      try {
        const response = await axios.post(endPoint, {message, chatId}, options)
        if (response.status === 200) {
          renderChat(chatId)
        }
      } catch (e) {
        
      }
    }

  }

  return (
   <div className="chat_container">
     <h1>Chat</h1>
     <div className="chat">
       
       {
         chats && <Sidebar renderChatParent = {renderChat} chats = {chats}/>
       }
        
        <ChatSection sendMessageParent = {sendMessage} chat = {filteredChat} />
   
    </div>
    </div>
  )
}

export default AppChat
