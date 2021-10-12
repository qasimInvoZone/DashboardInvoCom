import MeetingHeadCards from './components/cards/MeetinHeadCards'
import MeetTable from './components/TablesAndForms/MeetingTable'
import CardMeetup from './components/cards/CardMeetup'
import CalenderComplete from './components/charts/MeetCompHeader'
import MeetCardSwiper from './components/Swiper/MeetCardSwiper'
const Meeting = () => {
  return (
    <div className="p-2 bg-white mt-1" >
    
    <h2 className='m-2'><strong>Meeting Overview</strong></h2>
    
     <div className='mt-2'>
        <MeetingHeadCards />
     </div>   
    <div className="meet_card_head"> 
     <h2 className='m-2'> <strong>Meeting Schedule</strong></h2>
     <div className="meet_card_head_right">
     <CalenderComplete />
     
     </div>
    </div>
    <MeetCardSwiper />
        <MeetTable />
    </div>
  )
}

export default Meeting
