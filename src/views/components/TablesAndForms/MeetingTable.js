
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const avatarGroupData1 = [
  {
    title: 'Griffith',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Hu',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Felicia',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Quinlan',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Patrick',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Castor',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Mohammad',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Isabella',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Michael',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Lavinia',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Nelle',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Virginia',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const MeetTable = () => {
  return (

    <div className="complete_table">
      <div className="table-header">
          <h3>Meeting History</h3>

          <div>
          <UncontrolledDropdown>
          <DropdownToggle className='cursor-pointer' tag='span'>
            <MoreVertical size={14} />
          </DropdownToggle>
          <DropdownMenu right>
          <DropdownItem className='w-100 leads_dropdown_items'>
            
            Done
            </DropdownItem>
            <DropdownItem className='w-100 leads_dropdown_items'>
            
            Pending
            </DropdownItem>
            <DropdownItem className='w-100 leads_dropdown_items'>
            
            Attending
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
          </div>
      </div>
    <Table hover responsive>
      <thead>
        <tr>
          <th>ID NO#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Assignee</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span className='align-middle font-weight-bold'>#1232W</span>
          </td>
          <td>Peter Charles</td>
          <td>
            peter@gmail.com
          </td>
          <td>
            Ahmed
          </td>
          <td>
            <p style={{fontWeight: 'bold'}}>11/10/2020</p>
            <p style={{color: 'gray'}}>11:00 AM</p>
          
          </td>
          <td>
          <Badge className='mr-1 active_status'>
              Done
            </Badge>
          </td>
        </tr>
        <tr>
          <td>
            
            <span className='align-middle font-weight-bold'>#1223W</span>
          </td>
          <td>Jack Obes</td>
          <td>
            jack@hotmail.com 
          </td>
          <td>
            Ahmed
          </td>
          <td>
            <p style={{fontWeight: 'bold'}}>11/10/2020</p>
            <p style={{color: 'gray'}}>11:00 AM</p>
          
          </td>
          <td>
            <Badge  className='mr-1 assigned_status'>
              Attending
            </Badge>
          </td>
        </tr>
        <tr>
          <td>
            <span className='align-middle font-weight-bold'>#1223W</span>
          </td>
          <td>Jerry Milton</td>
          <td>
              jerry@yahool.com
          </td>
          <td>
            Ahmed
          </td>
          <td>
            <p style={{fontWeight: 'bold'}}>11/10/2020</p>
            <p style={{color: 'gray'}}>11:00 AM</p>
          
          </td>
          <td>
            <Badge  className='mr-1 pending_status'>
              Pending
            </Badge>
          </td>
         
        </tr>
      </tbody>
    </Table>
      
    </div>
  )
}

export default MeetTable