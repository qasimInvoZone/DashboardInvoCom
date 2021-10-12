// ** React Imports
import { Fragment, useState, useEffect } from 'react'

import { Menu } from 'react-feather'
// ** Chat App Component Imports

import Chat from './Chat'
import Sidebar from './SidebarLeft'
import UserProfileSidebar from './UserProfileSidebar'
import ChatSection from './ChatSection'
// ** Third Party Components
import './chatStyle.css'

import '@styles/base/pages/app-chat.scss'
import '@styles/base/pages/app-chat-list.scss'

const AppChat = () => {
const [showBar, setShowBar] = useState(true)
  return (
   <div className="chat_container">
     <div className="toggle_option">
     <Menu
          className="menu_bar" 
          size={16}
          onClick={() => setShowBar(!showBar)} />
          <h1 >Chat</h1>
        
    </div>    
          <div className="chat">
            {showBar ? (
              <Sidebar />
            ) : ('')
            }
              <ChatSection />
        
          </div>
    </div>
  )
}

export default AppChat
