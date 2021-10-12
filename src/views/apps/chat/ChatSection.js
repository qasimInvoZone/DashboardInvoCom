import React, { useState } from 'react'
import User1 from '../../../assets/images/avatars/12-small.png'
import Modal from './ChatModal'
import { RefreshCw, Delete, Smile, Send } from 'react-feather'

const ChatSection = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="complete_right_side">
            { showModal ? (
                <div className="modal_class">
                    <Modal />
                </div>
             ) : ('')}
            
            <div>
      
    <div className="headRight-sub">
      <div className="image_name_header">
    <h3>Lajy Ion</h3>
    </div>
    <div className="chat_head_right_icons">
      <RefreshCw size={16}/>
      <Delete size={16}/>
    </div>
    </div>
    </div>
             <div className="right-section">
    <div className="message mCustomScrollbar" data-mcs-theme="minimal-dark">
    <ul>
    <li className="msg-left">
    <div className="msg-left-sub">
    <img src={User1}/>
    <div className="msg-desc">
        <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
    </p>
    </div>
    <small>05:25 am</small>
    </div>
    </li>
    <li className="msg-right">
    <div className="msg-left-sub">
    
    <div className="msg-desc">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
    </p>
    </div>
    <small>05:25 am</small>
    </div>
    </li>
    <li className="msg-day"><small>Wednesday</small></li>
    <li className="msg-left">
    <div className="msg-left-sub">
    
    <div className="msg-desc">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
    </p>
    </div>
    <small>05:25 am</small>
    </div>
    </li>
    <li className="msg-right">
    <div className="msg-left-sub">
  
    <div className="msg-desc">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
    </p>
    </div>
    <small>05:25 am</small>
    </div>
    </li>
    <li className="msg-left">
    <div className="msg-left-sub">
   
    <div className="msg-desc">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
    </p>
    </div>
    <small>05:25 am</small>
    </div>
    </li>
    <li className="msg-right">
    <div className="msg-left-sub">
    
    <div className="msg-desc">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
    </p>
    </div>
    <small>05:25 am</small>
    </div>
    </li>
    </ul>
    </div>
    <div className="chat_footer">
        <div className="right-section-bottom">
            <input type="text" name="" placeholder="type a message..."/>
            <div className="input_footer_emojis">
                <Smile size={32} />
            <button>
                <p>Send</p>
                <Send size={18} /></button> 
            </div>
        </div>
        { showModal ? ('') : (
        <div className="conversation_authorization">
            <div className="con_authorize_left">
                <p>
                    This conversation is not assigned to you in order to participate please click 
                    on join or assign conversation
                </p>
            </div>

            <div className="con_authorize_right">
                <div>
                    <p onClick={() => setShowModal(true)}>Join Conversation</p>
                </div>
                <div>
                    <p onClick={() => setShowModal(true)}>Assign Conversation</p>
                </div>
            </div>
        </div>)}
    </div>
    </div>
        </div>
    )
}

export default ChatSection
