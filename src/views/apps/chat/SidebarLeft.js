// ** React Imports
import User1 from '../../../assets/images/avatars/12-small.png'
import User2 from '../../../assets/images/avatars/3-small.png'
import User3 from '../../../assets/images/avatars/10-small.png'
import Arrow from '../../../assets/images/icons/customIcons/arrowbottom.svg'
import { Search, Link } from 'react-feather'
import FilterSideBar from './ChatDropDowns/filterSideBar'
// import User3 from '../../../assets/images/portrait/avatar-s-3.jpg'
const SidebarLeft = () => {

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
        <img src={Arrow} />
      </div>
    </div>
        <ul>
          <div className="all_conversations_options">
            <p>
              All Conversations
            </p>
            <FilterSideBar />
          </div>
          <li  className="active">
            <div className="chatList">
              <div className="img">
                <img src={User1} />
              </div>
              <div className="desc">
                <p className="time">4 day</p>
                <h5>Lajy Ion</h5>
                <p>Lorem ipsum  amet...</p>
              </div>
            </div>
          </li>

          <li className="active">
            <div className="chatList">
              <div className="img">
                <img src={User2} />
              </div>
              <div className="desc">
                <p className="time">4 day</p>
                <h5>Lajy Ion</h5>
                <p>Lorem ipsum amet...</p>
              </div>
            </div>
          </li>
          <li className="active">
            <div className="chatList">
              <div className="img">
                <img src={User3} />
              </div>
              <div className="desc">
                <p className="time">4 day</p>
                <h5>Lajy Ion LAsdkjksldj ksaj</h5>
                <p>Lorem ipsum amet...</p>
              </div>
            </div>
          </li>

        </ul>
      </div></>
  )
}

export default SidebarLeft
