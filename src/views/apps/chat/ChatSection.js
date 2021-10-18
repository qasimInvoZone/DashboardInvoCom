import React, { useEffect, useState } from "react"
import User1 from "../../../assets/images/avatars/12-small.png"
import { RefreshCw, Delete, Smile, Send } from "react-feather"
const ChatSection = ({ chat, sendMessageParent }) => {
  const [user, setUser] = useState({})
  const [message, setMessage] = useState('')
  useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'))
      setUser(user)
  }, [setUser])
  function sendMessage(chat_id) {
    if (message !== '') {
        sendMessageParent(chat_id, message)
    }
  }
  return (
    <div className="complete_right_side">
      <div>
        <div className="headRight-sub">
          <div className="image_name_header">
            <img src={User1} />
            <h3>
                {
                  user.role === 'SUPER_ADMIN' || user.role === 'ADMIN'  ? chat?.client?.username : chat?.superAdmin?.username
                }
            </h3>
          </div>
          <div className="chat_head_right_icons">
            <RefreshCw size={16} />
            <Delete size={16} />
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="message mCustomScrollbar" data-mcs-theme="minimal-dark">
          <ul>
            {
                chat && chat?.messages && chat.messages?.length > 0 && chat.messages.map(message => (
                    message?.sender === user?.id ? <li className="msg-right">
                    <div className="msg-right-sub">
                      <div className="msg-desc">
                        <p>
                          {
                            message?.message
                          }
                        </p>
                      </div>
                      <small>{ message?.createdAt }</small>
                    </div>
                  </li> : <li className="msg-left">
              <div className="msg-left-sub">
                <div className="msg-desc">
                  <p>
                    {
                        message?.message
                    }
                  </p>
                </div>
                <small>{ message.createdAt }</small>
              </div>
            </li>
                ))
            }
          </ul>
        </div>
        <div className="right-section-bottom">
          <input type="text" name="" placeholder="type a message..."
          onChange={(e) => setMessage(e.target.value)}/>
          <div className="input_footer_emojis">
            <Smile size={32} />
            <button onClick={() => sendMessage(chat._id)}>
              <p>Send</p>
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ChatSection

