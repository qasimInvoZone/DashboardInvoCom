// ** React Imports
import User1 from '../../../assets/images/avatars/12-small.png'
import User2 from '../../../assets/images/avatars/3-small.png'
import User3 from '../../../assets/images/avatars/10-small.png'
import { Search } from 'react-feather'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ChartjsLineChart from '../../components/charts/ChartjsLineChart'


// import User3 from '../../../assets/images/portrait/avatar-s-3.jpg'
const SidebarLeft = ({ renderChatParent, chats }) => {

  const [user, setUser] = useState({})
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')
    
    setUser(user)

  }, [axios, setUser])

 function renderChat(chat_id) {
   renderChatParent(chat_id)
 }
  
 
  return  (
    
    <>
    <div className="left-section mCustomScrollbar" data-mcs-theme="minimal-dark">
    <div className="headLeft-section">
      <div className="headLeft-sub">
        <Search className="search_icon_chat" />
        <input type="text" name="search" placeholder="Search..." />
        
        <p>
          Recent
        </p>
        
      </div>
    </div>
        <ul>
          {
            chats?.length > 0 && chats?.map(chat => (
              <li href="/apps/chat/messages" className="active" onClick={() => renderChat(chat._id)}>
              <div className="chatList">
                <div className="img">
                  <img src={User1} />
                </div>
                <div className="desc">
                  <p className="time"></p>
                  <h5>{ chat?.client?.fullname }</h5>
                  <p>{ chat?.messages[chat?.messages?.length - 1]?.message }</p>
                </div>
              </div>
            </li>
            ))
          }
        </ul>
      </div></>
  )
}

export default SidebarLeft
