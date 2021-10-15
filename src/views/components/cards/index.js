import { Fragment, useContext, useState, useEffect } from 'react'
import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import Leads from '../../../assets/images/icons/customIcons/leads.svg'
import respond from '../../../assets/images/icons/customIcons/respondedLeads.svg'
import unassigned from '../../../assets/images/icons/customIcons/un-assignedLeads.svg'
import loggedin from '../../../assets/images/icons/customIcons/user-loggedin.svg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import axios from 'axios'

const Cards = (props) => {
  // const [leadsData, setleadsData] = useState({});
  // //fetch token from localStorage
  // useEffect(() => {
  //   const fetchLeadsData = async () => {
  //     const response = await axios.get(''); // axois call
  //     /*
  //       axios.post('https://example.com/postSomething', {
  //         {body}
  //       },
  //       {
  //         headers: {
  //           Authorization: 'Bearer ' + token
  //           'Content-Type': 'application/json'
  //         }
  //       })
  //     */
  //     const data = response.json();
  //     setleadsData(data);
  //   };
  //   fetchLeadsData();
  // }, []);
  console.log(props);
  const context = useContext(ThemeColors)

  return (
    <Fragment>
      
      <Row>
        <Col sm='6' xl='3' md='6' >
        <Card className="card">
        <CardHeader>
          
          <CardTitle  className="card_header">
            <div className="icon_container"><img src={Leads} alt="" /></div>
            <h5> Total Leads </h5>
            </CardTitle>
          
        </CardHeader>
        <CardBody>
          <CardText>
          <div className="card_body">    
          <h3>{props.leadsData.total_leads}</h3> 
          <div className="body_icon">
          ^
          </div>
          <p>(+12 %)</p>
          </div>
          </CardText>
        </CardBody>
      </Card>
        </Col>
      
        <Col sm='6' xl='3' md='6'>
        <Card className="card">
        <CardHeader>
          
          <CardTitle  className="card_header">
            <div className="icon_container_2"><img src={respond} alt="" /></div>
            <h5>Responded Leads</h5>
            </CardTitle>
          
        </CardHeader>
        <CardBody>
          <CardText>
          <div className="card_body">    
          <h3>{props.leadsData.responded_leads}</h3> 
          <div className="body_icon_2">
          ^
          </div>
          <p>(-4 %)</p>
          </div>
          </CardText>
        </CardBody>
      </Card>
        </Col>
       
        <Col sm='6' xl='3' md='6'>
        <Card className="card">
        <CardHeader>
          
          <CardTitle  className="card_header">
            <div className="icon_container_3"><img src={unassigned} alt="" /></div>
            <h5> Un-Assigned Leads </h5>
            </CardTitle>
          
        </CardHeader>
        <CardBody>
          <CardText>
          <div className="card_body">    
          <h3>{props.leadsData.unassigned_leads}</h3> 
          <div className="body_icon">
          ^
          </div>
          <p>(+3 %)</p>
          </div>
          </CardText>
        </CardBody>
      </Card>
        </Col>
        

        <Col sm='6' xl='3' md='6'>
        <Card className="card">
        <CardHeader>
          
          <CardTitle  className="card_header">
            <div className="icon_container_4"><img src={loggedin} alt="" /></div>
            <h5> User Loged in </h5>
            </CardTitle>
          
        </CardHeader>
        <CardBody>
          <CardText>
          <div className="card_body">    
          <h3>2</h3>
          </div>
          </CardText>
        </CardBody>
      </Card>
        </Col>
      </Row>

    </Fragment>
  )
}

export default Cards
